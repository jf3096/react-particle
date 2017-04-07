import * as React from 'react';
import {expect} from 'chai';
import {shallow, mount, render} from 'enzyme';
import Particle from '../../src/index';

describe("A suite for react-particle", function () {
    it(`expect canvas structure <canvas width="0" height="0" style="z-index: 10; position: relative;"></canvas>`, function () {
        const wrapper = mount(<Particle />);
        const $wrapper = wrapper.find('div').render();
        const $canvas = $wrapper.find('canvas');
        expect($canvas.attr('width')).to.equal("0");
        expect($canvas.attr('height')).to.equal("0");
        expect($canvas.css('z-index')).to.equal("10");
        expect($canvas.css('position')).to.equal("relative");
    });

    it(`expect class name to have 'test'`, function () {
        const wrapper = mount(<Particle className="test"/>);
        const isExist = !!wrapper.find('div.test')[`node`];
        expect(isExist).to.be.true;
    });
});
