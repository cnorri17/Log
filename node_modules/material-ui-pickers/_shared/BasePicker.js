"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var React = _interopRequireWildcard(require("react"));

var _WithUtils = _interopRequireDefault(require("./WithUtils"));

/* eslint-disable react/prop-types */
var getInitialDate = function getInitialDate(_ref) {
  var utils = _ref.utils,
      value = _ref.value,
      initialFocusedDate = _ref.initialFocusedDate;
  var initialDate = value || initialFocusedDate || utils.date();
  var date = utils.date(initialDate);
  return utils.isValid(date) ? date : utils.date();
};

var BasePicker =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(BasePicker, _React$Component);

  function BasePicker() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      date: getInitialDate(_this.props),
      isAccepted: false
    };

    _this.changeDate = function (date, callback) {
      return _this.setState({
        date: date
      }, callback);
    };

    _this.handleAcceptedChange = function (isAccepted, callback) {
      return _this.setState({
        isAccepted: isAccepted
      }, callback);
    };

    _this.handleClear = function () {
      return _this.props.onChange(null);
    };

    _this.handleAccept = function () {
      return _this.props.onChange(_this.state.date);
    };

    _this.handleSetTodayDate = function () {
      return _this.handleChange(_this.props.utils.date(), false);
    };

    _this.handleTextFieldChange = function (date) {
      var onChange = _this.props.onChange;

      if (date === null) {
        onChange(null);
      } else {
        _this.changeDate(date, function () {
          return onChange(date);
        });
      }
    };

    _this.pick12hOr24hFormat = function (default12hFormat, default24hFormat) {
      var _this$props = _this.props,
          format = _this$props.format,
          labelFunc = _this$props.labelFunc,
          ampm = _this$props.ampm;

      if (format || labelFunc) {
        return format;
      }

      return ampm ? default12hFormat : default24hFormat;
    };

    _this.handleChange = function (newDate, isFinish) {
      if (isFinish === void 0) {
        isFinish = true;
      }

      var _assertThisInitialize = (0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)),
          handleAcceptedChange = _assertThisInitialize.handleAcceptedChange,
          changeDate = _assertThisInitialize.changeDate;

      var _this$props2 = _this.props,
          autoOk = _this$props2.autoOk,
          onChange = _this$props2.onChange;
      changeDate(newDate, function () {
        if (isFinish && autoOk) {
          onChange(newDate); // pass down accept true, and make it false in the next tick

          handleAcceptedChange(true, function () {
            return handleAcceptedChange(false);
          });
        }
      });
    };

    return _this;
  }

  var _proto = BasePicker.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props3 = this.props,
        utils = _this$props3.utils,
        value = _this$props3.value;

    if (prevProps.value !== value || prevProps.utils.locale !== utils.locale) {
      this.changeDate(getInitialDate(this.props));
    }
  };

  _proto.render = function render() {
    return this.props.children((0, _extends2.default)({}, this.props, this.state, {
      changeDate: this.changeDate,
      handleAcceptedChange: this.handleAcceptedChange,
      handleClear: this.handleClear,
      handleAccept: this.handleAccept,
      handleSetTodayDate: this.handleSetTodayDate,
      handleTextFieldChange: this.handleTextFieldChange,
      pick12hOr24hFormat: this.pick12hOr24hFormat,
      handleChange: this.handleChange
    }));
  };

  return BasePicker;
}(React.Component);

var _default = (0, _WithUtils.default)()(BasePicker);

exports.default = _default;