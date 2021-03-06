
Elm.Native.Basics = {};
Elm.Native.Basics.make = function(elm) {
  elm.Native = elm.Native || {};
  elm.Native.Basics = elm.Native.Basics || {};
  if (elm.Native.Basics.values) return elm.Native.Basics.values;

  var JS = Elm.Native.JavaScript.make(elm);
  var Utils = Elm.Native.Utils.make(elm);

  function div(a,b) { return (a/b)|0; }
  function rem(a,b) { return a % b; }
  var mod = Utils.mod;
  function abs(x) { return x < 0 ? -x : x; }
  function logBase(base,n) { return Math.log(n) / Math.log(base); }
  function min(a,b) { return Utils.cmp(a,b) < 0 ? a : b; }
  function max(a,b) { return Utils.cmp(a,b) > 0 ? a : b; }
  function clamp(lo,hi,n) {
      return Utils.cmp(n,lo) < 0 ? lo : Utils.cmp(n,hi) > 0 ? hi : n; }
  function xor(a,b) { return a !== b; }
  function not(b) { return !b; }

  function truncate(n) { return n|0; }

  function curry(f,a,b) { return f(Utils.Tuple2(a,b)); }
  function uncurry(f,v) { return A2(f,v._0,v._1); }
  function fst(t) { return t._0; }
  function snd(t) { return t._1; }

  var basics = {
      div:F2(div),
      rem:F2(rem),
      mod:mod,

      pi:Math.PI,
      e:Math.e,
      cos:Math.cos,
      sin:Math.sin,
      tan:Math.tan,
      acos:Math.acos,
      asin:Math.asin,
      atan:Math.atan,
      atan2:F2(Math.atan2),

      sqrt:Math.sqrt,
      abs:abs,
      logBase:F2(logBase),
      min:F2(min),
      max:F2(max),
      clamp:F3(clamp),
      compare:Utils.compare,

      xor:F2(xor),
      not:not,

      truncate:truncate,
      ceiling:Math.ceil,
      floor:Math.floor,
      round:Math.round,
      toFloat:function(x) { return x; },

      curry:F3(curry),
      uncurry:F2(uncurry),
      fst:fst,
      snd:snd
  };

  return elm.Native.Basics.values = basics;
};
