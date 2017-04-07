"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles = require("./css/index.css");
const zhihu_particle_1 = require("zhihu-particle");
const cx = require("classnames");
class Particle extends React.Component {
    componentDidMount() {
        const { options } = this.props;
        // {interactive: true, density: 'low'}
        new zhihu_particle_1.default(this.wrapper, options);
    }
    render() {
        const _a = this.props, { tagName, options, className } = _a, extraProps = __rest(_a, ["tagName", "options", "className"]);
        return React.createElement(tagName || `div`, Object.assign({}, extraProps, { className: cx(className, styles.background), ref: (wrapper) => this.wrapper = wrapper }));
    }
}
exports.default = Particle;
