import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function EventsChartSearchFilter(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    console.log('handling change');
    setValue(event.target.value);
  };
  function selectChange(event) {
    setCategory(event.target.value);
  }

  //submitting the filter
  function handleSubmit() {
    console.log('my value and category', value, category);
    //change the state of currDisplay
    props.updateCurrDisplay({
      filterType: 'keyType',
      filterValue: category,
    });
    props.updateCurrDisplay({ filterType: 'keyName', filterValue: value });
    console.log('my current display in handle submit', props.currDisplay);
    const queryOptions = {
      pageSize: props.pageSize,
      pageNum: props.pageNum,
      keyNameFilter: props.currDisplay.keyNameFilter,
      keyTypeFilter: props.currDisplay.keyTypeFilter,
      refreshScan: 0,
    };
    props.changeKeyspacePage(
      props.currInstance,
      props.currDatabase,
      queryOptions
    );
  }

  function clearFilter() {
    setValue('');
    setCategory('');
    props.updateCurrDisplay({ filterType: 'keyName', filterValue: '' });
    props.updateCurrDisplay({ filterType: 'keyType', filterValue: '' });
    const queryOptions = {
      pageSize: props.pageSize,
      pageNum: props.pageNum,
      refreshScan: 0,
      keyNameFilter: props.currDisplay.keyNameFilter,
      keyTypeFilter: props.currDisplay.keyTypeFilter,
    };
    props.changeKeyspacePage(
      props.currInstance,
      props.currDatabase,
      queryOptions
    );
  }

  const newArea = [];

  return (
    <div style={{ width: '75%', display: 'flex', flexDirection: 'column' }}>
      <FormControl className={classes.formControl}>
        <TextField
          id='standard-secondary'
          label='key name filter'
          color='secondary'
          onChange={handleChange}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor='grouped-select'>key type filter</InputLabel>
        <Select defaultValue='' id='grouped-select' onChange={selectChange}>
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={'string'}>string</MenuItem>
          <MenuItem value={'list'}>list</MenuItem>
          <MenuItem value={'set'}>set</MenuItem>
          <MenuItem value={'zset'}>zset</MenuItem>
          <MenuItem value={'hash'}>hash</MenuItem>
        </Select>
      </FormControl>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItem: 'center',
        }}
      >
        <Button onClick={clearFilter} color='default'>
          Clear
        </Button>
        <Button onClick={handleSubmit} color='default'>
          Filter
        </Button>
        <Button color='default'>+</Button>
      </div>
      <div>{newArea}</div>
    </div>
  );
}

// <button
//             className='filter-button'
//             id='clearFilterButton'
//             onClick={(e) => {
//               e.preventDefault();
//               this.props.updateCurrDisplay('', '');
//             }}
//           >
//             Clear Filter
//           </button>
