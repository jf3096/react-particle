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

    it(`expect tag name to be 'span'`, function () {
        const wrapper = mount(<Particle tagName="span"/>);
        const isExist = !!wrapper.find('span')[`node`];
        expect(isExist).to.be.true;
    });

    it(`expect option to be set and no exception throw`, function () {
        mount(<Particle options={{atomColor: 'red'}}/>);
        mount(<Particle options={{interactive: true}}/>);
        mount(<Particle options={{velocity: 'fast'}}/>);
        mount(<Particle options={{atomColor: 'red'}}/>);
    });

    it(`expect option velocity set to 2 and will throw`, function () {
        expect(() => mount(<Particle options={{velocity: 2}}/>)).to.throw();
    });
});
