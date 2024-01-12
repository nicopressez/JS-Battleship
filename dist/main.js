(() => {
  "use strict";
  var t = {
    d: (r, e) => {
      for (var n in e)
        t.o(e, n) &&
          !t.o(r, n) &&
          Object.defineProperty(r, n, { enumerable: !0, get: e[n] });
    },
    o: (t, r) => Object.prototype.hasOwnProperty.call(t, r),
  };
  function r(t) {
    return (
      (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      r(t)
    );
  }
  function e(t, r) {
    for (var e = 0; e < r.length; e++) {
      var o = r[e];
      (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        "value" in o && (o.writable = !0),
        Object.defineProperty(t, n(o.key), o);
    }
  }
  function n(t) {
    var e = (function (t, e) {
      if ("object" != r(t) || !t) return t;
      var n = t[Symbol.toPrimitive];
      if (void 0 !== n) {
        var o = n.call(t, "string");
        if ("object" != r(o)) return o;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(t);
    })(t);
    return "symbol" == r(e) ? e : String(e);
  }
  t.d({}, { T: () => h, l: () => m });
  var o = (function () {
    function t(r) {
      !(function (t, r) {
        if (!(t instanceof r))
          throw new TypeError("Cannot call a class as a function");
      })(this, t),
        (this.length = r),
        (this.sunk = !1),
        (this.hitIndex = 0);
    }
    var r, n;
    return (
      (r = t),
      (n = [
        {
          key: "hit",
          value: function () {
            this.hitIndex++, this.isSunk();
          },
        },
        {
          key: "isSunk",
          value: function () {
            this.hitIndex == this.length && (this.sunk = !0);
          },
        },
      ]) && e(r.prototype, n),
      Object.defineProperty(r, "prototype", { writable: !1 }),
      t
    );
  })();
  function a(t) {
    return (
      (a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      a(t)
    );
  }
  function i(t, r) {
    for (var e = 0; e < r.length; e++) {
      var n = r[e];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, u(n.key), n);
    }
  }
  function u(t) {
    var r = (function (t, r) {
      if ("object" != a(t) || !t) return t;
      var e = t[Symbol.toPrimitive];
      if (void 0 !== e) {
        var n = e.call(t, "string");
        if ("object" != a(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(t);
    })(t);
    return "symbol" == a(r) ? r : String(r);
  }
  var l = (function () {
    function t() {
      var r, e, n;
      !(function (t, r) {
        if (!(t instanceof r))
          throw new TypeError("Cannot call a class as a function");
      })(this, t),
        (r = this),
        (e = "board"),
        (n = Array.from({ length: 10 }, function () {
          return new Array(10).fill(null);
        })),
        (e = u(e)) in r
          ? Object.defineProperty(r, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[e] = n),
        (this.carrier = new o(5)),
        (this.battleship = new o(4)),
        (this.destroyer = new o(3)),
        (this.submarine = new o(3)),
        (this.patrolBoat = new o(2));
    }
    var r, e;
    return (
      (r = t),
      (e = [
        {
          key: "placeShip",
          value: function (t, r, e) {
            var n = this;
            if (
              !(function (t, r, e) {
                for (var o = 0; o <= t.length - 1; o++)
                  if (null !== n.board[r][e + o]) return !1;
                return !0;
              })(t, r, e)
            )
              return "error";
            for (var o = 0; o <= t.length - 1; o++) this.board[r][e + o] = t;
          },
        },
        {
          key: "receiveAttack",
          value: function (t, r) {
            null === this.board[t][r]
              ? (this.board[t][r] = "miss")
              : (this.board[t][r].hit(), (this.board[t][r] = "hit"));
          },
        },
        {
          key: "allSunk",
          value: function () {
            return (
              !0 === this.carrier.sunk &&
              !0 === this.battleship.sunk &&
              !0 === this.destroyer.sunk &&
              !0 === this.submarine.sunk &&
              !0 === this.patrolBoat.sunk
            );
          },
        },
      ]) && i(r.prototype, e),
      Object.defineProperty(r, "prototype", { writable: !1 }),
      t
    );
  })();
  function c(t) {
    return (
      (c =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      c(t)
    );
  }
  function s(t, r) {
    for (var e = 0; e < r.length; e++) {
      var n = r[e];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, b(n.key), n);
    }
  }
  function b(t) {
    var r = (function (t, r) {
      if ("object" != c(t) || !t) return t;
      var e = t[Symbol.toPrimitive];
      if (void 0 !== e) {
        var n = e.call(t, "string");
        if ("object" != c(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(t);
    })(t);
    return "symbol" == c(r) ? r : String(r);
  }
  var f = (function () {
      function t(r) {
        !(function (t, r) {
          if (!(t instanceof r))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.name = r),
          (this.board = new l());
      }
      var r, e;
      return (
        (r = t),
        (e = [
          {
            key: "playTurn",
            value: function (t, r, e) {
              t.board.receiveAttack(r, e);
            },
          },
          {
            key: "randomTurn",
            value: function (t) {
              var r = Math.floor(10 * Math.random()),
                e = Math.floor(10 * Math.random());
              return "miss" !== t.board.board[r][e] &&
                "hit" !== t.board.board[r][e]
                ? (this.playTurn(t, r, e), "".concat(r).concat(e))
                : this.randomTurn(t);
            },
          },
        ]) && s(r.prototype, e),
        Object.defineProperty(r, "prototype", { writable: !1 }),
        t
      );
    })(),
    p = function (t) {
      var r = document.querySelector("body"),
        e = document.createElement("section");
      r.appendChild(e),
        e.classList.add("gridContainer"),
        e.classList.add(t.name);
      for (var n = 0; n <= 9; n++)
        for (var o = 0; o <= 9; o++) {
          var a = document.createElement("div");
          a.classList.add("".concat(n).concat(o)),
            e.appendChild(a),
            "player2" === t.name && y(a);
        }
    },
    y = function (t) {
      t.addEventListener(
        "click",
        function () {
          var r = Number(t.getAttribute("class").charAt(0)),
            e = Number(t.getAttribute("class").charAt(1));
          null !== m.board.board[r][e]
            ? t.classList.add("ship")
            : t.classList.add("miss"),
            h.playTurn(m, r, e),
            setTimeout(function () {
              return d();
            }, 300);
        },
        { once: !0 },
      );
    },
    d = function () {
      var t = m.randomTurn(h),
        r = document
          .getElementsByClassName("player1")[0]
          .getElementsByClassName("".concat(t)),
        e = t.charAt(0),
        n = t.charAt(1);
      "hit" === h.board.board[e][n]
        ? r[0].classList.add("ship")
        : r[0].classList.add("miss");
    },
    h = new f("player1"),
    m = new f("player2");
  h.board.placeShip(h.board.carrier, 0, 0),
    h.board.placeShip(h.board.battleship, 1, 0),
    h.board.placeShip(h.board.destroyer, 2, 0),
    h.board.placeShip(h.board.submarine, 3, 0),
    h.board.placeShip(h.board.patrolBoat, 4, 0),
    m.board.placeShip(m.board.carrier, 0, 1),
    m.board.placeShip(m.board.battleship, 1, 1),
    m.board.placeShip(m.board.destroyer, 2, 3),
    m.board.placeShip(m.board.submarine, 3, 4),
    m.board.placeShip(m.board.patrolBoat, 4, 2),
    p(h),
    p(m);
})();
