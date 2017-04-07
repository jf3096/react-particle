import * as React from 'react';
import * as styles from './css/index.css';
import ZhihuParticle from 'zhihu-particle';
import {IParticleProps as IZhihuParticleProps} from "zhihu-particle/libs";
import * as cx from 'classnames';

export interface IParticleProps {
    tagName?: string;
    options?: IZhihuParticleProps;
    className?: string;
}

export default class Particle extends React.Component<IParticleProps, void> {
    private wrapper: HTMLElement;

    public componentDidMount() {
        const {options} = this.props;
        // {interactive: true, density: 'low'}
        new ZhihuParticle(this.wrapper, options);
    }

    public render() {
        const {tagName, options, className, ...extraProps} = this.props;
        return React.createElement(tagName || `div`, {
            ...extraProps,
            className: cx(className, styles.background),
            ref: (wrapper: HTMLElement) => this.wrapper = wrapper
        });
    }
}