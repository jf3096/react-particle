"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const chai_1 = require("chai");
const enzyme_1 = require("enzyme");
const index_1 = require("../../src/index");
describe("A suite for react-particle", function () {
    it(`expect canvas structure <canvas width="0" height="0" style="z-index: 10; position: relative;"></canvas>`, function () {
        const wrapper = enzyme_1.mount(React.createElement(index_1.default, null));
        const $wrapper = wrapper.find('div').render();
        const $canvas = $wrapper.find('canvas');
        chai_1.expect($canvas.attr('width')).to.equal("0");
        chai_1.expect($canvas.attr('height')).to.equal("0");
        chai_1.expect($canvas.css('z-index')).to.equal("10");
        chai_1.expect($canvas.css('position')).to.equal("relative");
    });
    it(`expect class name to have 'test'`, function () {
        const wrapper = enzyme_1.mount(React.createElement(index_1.default, { className: "test" }));
        const isExist = !!wrapper.find('div.test')[`node`];
        chai_1.expect(isExist).to.be.true;
    });
});
