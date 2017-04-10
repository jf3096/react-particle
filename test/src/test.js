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
    it(`expect tag name to be 'span'`, function () {
        const wrapper = enzyme_1.mount(React.createElement(index_1.default, { tagName: "span" }));
        const isExist = !!wrapper.find('span')[`node`];
        chai_1.expect(isExist).to.be.true;
    });
    it(`expect option to be set and no exception throw`, function () {
        enzyme_1.mount(React.createElement(index_1.default, { options: { atomColor: 'red' } }));
        enzyme_1.mount(React.createElement(index_1.default, { options: { interactive: true } }));
        enzyme_1.mount(React.createElement(index_1.default, { options: { velocity: 'fast' } }));
        enzyme_1.mount(React.createElement(index_1.default, { options: { atomColor: 'red' } }));
    });
    it(`expect option velocity set to 2 and will throw`, function () {
        chai_1.expect(() => enzyme_1.mount(React.createElement(index_1.default, { options: { velocity: 2 } }))).to.throw();
    });
});
