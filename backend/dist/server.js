"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var express = require("express");
var _require = require("mongodb"),
  MongoClient = _require.MongoClient;
var path = require("path");
var bodyParser = require("body-parser"); // To parse incoming request body

var app = express();
var port = 3000;

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());
var uri = "mongodb+srv://mphoteng16:Tsotets21@imy220.h4fks.mongodb.net/?retryWrites=true&w=majority&appName=IMY220";
var client = new MongoClient(uri);
function connectToMongoDB() {
  return _connectToMongoDB.apply(this, arguments);
}
function _connectToMongoDB() {
  _connectToMongoDB = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return client.connect();
        case 3:
          console.log("Connected to MongoDB");
          _context9.next = 9;
          break;
        case 6:
          _context9.prev = 6;
          _context9.t0 = _context9["catch"](0);
          console.error("Failed to connect to MongoDB", _context9.t0);
        case 9:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 6]]);
  }));
  return _connectToMongoDB.apply(this, arguments);
}
function runFindQuery(_x) {
  return _runFindQuery.apply(this, arguments);
} // Helper function to find a user by username and password
function _runFindQuery() {
  _runFindQuery = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(collectionName) {
    var database, collection, cursor;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          database = client.db('DeliverableDatabase');
          collection = database.collection(collectionName);
          cursor = collection.find();
          _context10.next = 6;
          return cursor.toArray();
        case 6:
          return _context10.abrupt("return", _context10.sent);
        case 9:
          _context10.prev = 9;
          _context10.t0 = _context10["catch"](0);
          console.error("Error running find query", _context10.t0);
          throw _context10.t0;
        case 13:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 9]]);
  }));
  return _runFindQuery.apply(this, arguments);
}
function findUser(_x2, _x3) {
  return _findUser.apply(this, arguments);
} // API route to get all users
function _findUser() {
  _findUser = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(username, password) {
    var database, usersCollection, user;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          database = client.db('DeliverableDatabase');
          usersCollection = database.collection("Users");
          _context11.next = 5;
          return usersCollection.findOne({
            username: username,
            password: password
          });
        case 5:
          user = _context11.sent;
          return _context11.abrupt("return", user);
        case 9:
          _context11.prev = 9;
          _context11.t0 = _context11["catch"](0);
          console.error("Error finding user", _context11.t0);
          throw _context11.t0;
        case 13:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 9]]);
  }));
  return _findUser.apply(this, arguments);
}
app.get('/api/users', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var users;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return runFindQuery("Users");
        case 3:
          users = _context.sent;
          res.status(200).json(users);
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: "Error retrieving users"
          });
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function (_x4, _x5) {
    return _ref.apply(this, arguments);
  };
}());

// API route to get all songs
app.get('/api/songs', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _songs;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return runFindQuery("Songs");
        case 3:
          _songs = _context2.sent;
          res.status(200).json(_songs);
          _context2.next = 10;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            message: "Error retrieving songs"
          });
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function (_x6, _x7) {
    return _ref2.apply(this, arguments);
  };
}());

// API route to get all playlists
app.get('/api/playlists', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var playlists;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return runFindQuery("Playlist");
        case 3:
          playlists = _context3.sent;
          res.status(200).json(playlists);
          _context3.next = 10;
          break;
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            message: "Error retrieving playlists"
          });
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function (_x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}());

// API route for login
app.post('/api/login', /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$body, username, password, user;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _req$body = req.body, username = _req$body.username, password = _req$body.password;
          if (!(!username || !password)) {
            _context4.next = 3;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            message: "Username and password are required"
          }));
        case 3:
          _context4.prev = 3;
          _context4.next = 6;
          return findUser(username, password);
        case 6:
          user = _context4.sent;
          if (user) {
            _context4.next = 9;
            break;
          }
          return _context4.abrupt("return", res.status(401).json({
            message: "Invalid credentials"
          }));
        case 9:
          // Simulate a successful login response with user data
          res.status(200).json({
            message: "Login successful",
            user: {
              id: user._id,
              username: user.username,
              followers: user.followers
            }
          });
          _context4.next = 15;
          break;
        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](3);
          res.status(500).json({
            message: "Error during login"
          });
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[3, 12]]);
  }));
  return function (_x10, _x11) {
    return _ref4.apply(this, arguments);
  };
}());
app.post('/api/signup', /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _req$body2, username, email, password, database, usersCollection, existingUser, newUser, result;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _req$body2 = req.body, username = _req$body2.username, email = _req$body2.email, password = _req$body2.password; // Check if all required fields are present
          if (!(!username || !email || !password)) {
            _context5.next = 3;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: "All fields (username, email, password) are required."
          }));
        case 3:
          _context5.prev = 3;
          // Connect to the database
          database = client.db('DeliverableDatabase');
          usersCollection = database.collection("Users"); // Check if the user already exists
          _context5.next = 8;
          return usersCollection.findOne({
            email: email
          });
        case 8:
          existingUser = _context5.sent;
          if (!existingUser) {
            _context5.next = 11;
            break;
          }
          return _context5.abrupt("return", res.status(409).json({
            message: "User already exists with this email."
          }));
        case 11:
          // Create a new user object with default values
          newUser = {
            username: username,
            email: email,
            password: password,
            // Storing password as plain text
            subscriptionType: "free",
            // Default subscription for new users
            favorites: {
              songs: [],
              playlists: []
            },
            followers: 0,
            following: []
          }; // Insert new user into the collection
          _context5.next = 14;
          return usersCollection.insertOne(newUser);
        case 14:
          result = _context5.sent;
          // Return success response with the new user data (excluding password)
          res.status(201).json({
            message: "User created successfully",
            user: {
              id: result.insertedId,
              username: newUser.username,
              email: newUser.email,
              subscriptionType: newUser.subscriptionType,
              favorites: newUser.favorites,
              followers: newUser.followers,
              following: newUser.following
            }
          });
          _context5.next = 22;
          break;
        case 18:
          _context5.prev = 18;
          _context5.t0 = _context5["catch"](3);
          console.error("Error during sign-up:", _context5.t0);
          res.status(500).json({
            message: "Server error during sign-up"
          });
        case 22:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[3, 18]]);
  }));
  return function (_x12, _x13) {
    return _ref5.apply(this, arguments);
  };
}());
app.post('/api/songs', function (req, res) {
  var _req$body3 = req.body,
    title = _req$body3.title,
    artist = _req$body3.artist,
    album = _req$body3.album,
    duration = _req$body3.duration;
  var newSong = {
    id: songs.length + 1,
    title: title,
    artist: artist,
    album: album,
    duration: duration
  };
  songs.push(newSong);
  res.status(201).json(newSong);
});
app.post('/api/playlists/:playlistId/songs', /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var playlistId, songTitle, database, playlistsCollection, result;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          playlistId = req.params.playlistId;
          songTitle = req.body.song;
          _context6.prev = 2;
          _context6.next = 5;
          return client.connect();
        case 5:
          database = client.db('DeliverableDatabase');
          playlistsCollection = database.collection('Playlist');
          _context6.next = 9;
          return playlistsCollection.updateOne({
            _id: playlistId
          }, {
            $push: {
              songs: songTitle
            }
          });
        case 9:
          result = _context6.sent;
          if (result.modifiedCount > 0) {
            res.status(200).json({
              message: "Song added successfully"
            });
          } else {
            res.status(404).json({
              message: "Playlist not found"
            });
          }
          _context6.next = 16;
          break;
        case 13:
          _context6.prev = 13;
          _context6.t0 = _context6["catch"](2);
          res.status(500).json({
            message: "Error adding song to playlist",
            error: _context6.t0.message
          });
        case 16:
          _context6.prev = 16;
          _context6.next = 19;
          return client.close();
        case 19:
          return _context6.finish(16);
        case 20:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[2, 13, 16, 20]]);
  }));
  return function (_x14, _x15) {
    return _ref6.apply(this, arguments);
  };
}());

// API route to edit a playlist
app.patch('/api/playlists/:playlistId', /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var playlistId, _req$body4, name, description, database, playlistsCollection, updateObject, result;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          playlistId = req.params.playlistId;
          _req$body4 = req.body, name = _req$body4.name, description = _req$body4.description;
          _context7.prev = 2;
          _context7.next = 5;
          return client.connect();
        case 5:
          database = client.db('DeliverableDatabase');
          playlistsCollection = database.collection('Playlist');
          updateObject = {};
          if (name) updateObject.name = name;
          if (description) updateObject.description = description;
          _context7.next = 12;
          return playlistsCollection.updateOne({
            _id: playlistId
          },
          // Match the playlist by ID
          {
            $set: updateObject
          } // Set the updated fields
          );
        case 12:
          result = _context7.sent;
          if (result.modifiedCount > 0) {
            res.status(200).json({
              message: "Playlist updated successfully"
            });
          } else {
            res.status(404).json({
              message: "Playlist not found or no changes made"
            });
          }
          _context7.next = 19;
          break;
        case 16:
          _context7.prev = 16;
          _context7.t0 = _context7["catch"](2);
          res.status(500).json({
            message: "Error updating playlist",
            error: _context7.t0.message
          });
        case 19:
          _context7.prev = 19;
          _context7.next = 22;
          return client.close();
        case 22:
          return _context7.finish(19);
        case 23:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[2, 16, 19, 23]]);
  }));
  return function (_x16, _x17) {
    return _ref7.apply(this, arguments);
  };
}());
app.use(express["static"]("./frontend/public"));

// Start the server
app.listen(port, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
  return _regeneratorRuntime().wrap(function _callee8$(_context8) {
    while (1) switch (_context8.prev = _context8.next) {
      case 0:
        _context8.next = 2;
        return connectToMongoDB();
      case 2:
        // Ensure MongoDB is connected when the server starts
        console.log("Server running on http://localhost:".concat(port));
      case 3:
      case "end":
        return _context8.stop();
    }
  }, _callee8);
})));