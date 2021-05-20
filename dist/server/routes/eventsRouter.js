var express = require('express');
var eventsRouter = express.Router();
var eventsMonitors = require('../redis-monitors/redis-monitors');
eventsRouter.get('/', function (req, res, next) {
    var body = { data: [] };
    eventsMonitors.forEach(function (monitor) {
        var instance = {
            instanceId: monitor.instanceId,
            keyspaces: []
        };
        monitor.keyspaces.forEach(function (keyspace) {
            var eventTotal = req.query.eventTotal;
            instance.keyspaces.push(keyspace.eventLog.returnLogAsArray((eventTotal) ? eventTotal : 0));
        });
        body.data.push(instance);
    });
    res.status(200).json(body);
});
eventsRouter.get('/:instanceId/', function (req, res, next) {
    var body = { data: [] };
    var instanceId = req.params.instanceId;
    var monitor = eventsMonitors.find(function (m) {
        return m.instanceId === +instanceId;
    });
    var instance = {
        instanceId: monitor.instanceId,
        keyspaces: []
    };
    monitor.keyspaces.forEach(function (keyspace) {
        var eventTotal = req.query.eventTotal;
        instance.keyspaces.push(keyspace.eventLog.returnLogAsArray((eventTotal) ? eventTotal : 0));
    });
    body.data.push(instance);
    res.status(200).json(body);
});
eventsRouter.get('/:instanceId/:dbIndex', function (req, res, next) {
    var body = { data: [] };
    var _a = req.params, instanceId = _a.instanceId, dbIndex = _a.dbIndex;
    var monitor = eventsMonitors.find(function (m) {
        return m.instanceId === +instanceId;
    });
    var instance = {
        instanceId: monitor.instanceId,
        keyspaces: []
    };
    var eventTotal = req.query.eventTotal;
    instance.keyspaces.push(monitor.keyspaces[dbIndex].eventLog.returnLogAsArray((eventTotal) ? eventTotal : 0));
    body.data.push(instance);
    res.status(200).json(body);
});
module.exports = eventsRouter;
