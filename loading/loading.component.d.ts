import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { TemplatePortal } from '@angular/cdk/portal';
import { Observable } from 'rxjs/Observable';
export declare enum LoadingType {
    Circular,
    Linear,
}
export declare enum LoadingMode {
    Determinate,
    Indeterminate,
}
export declare enum LoadingStrategy {
    Overlay,
    Replace,
}
export declare enum LoadingStyle {
    FullScreen,
    Overlay,
    None,
}
export declare const TD_CIRCLE_DIAMETER: number;
export declare class TdLoadingComponent {
    private _elementRef;
    private _changeDetectorRef;
    private _animationIn;
    private _animationOut;
    private _mode;
    private _defaultMode;
    private _value;
    private _circleDiameter;
    /**
     * Flag for animation
     */
    animation: boolean;
    /**
     * Content injected into loading component.
     */
    content: TemplatePortal<any>;
    /**
     * Sets mode of [TdLoadingComponent] to LoadingMode.Determinate or LoadingMode.Indeterminate
     */
    mode: LoadingMode;
    /**
     * Sets value of [TdLoadingComponent] if mode is 'LoadingMode.Determinate'
     */
    value: number;
    style: LoadingStyle;
    /**
     * height: number
     * Sets height of [TdLoadingComponent].
     */
    height: number;
    /**
     * type: LoadingType
     * Sets type of [TdLoadingComponent] rendered.
     */
    type: LoadingType;
    /**
     * color: primary' | 'accent' | 'warn'
     * Sets theme color of [TdLoadingComponent] rendered.
     */
    color: 'primary' | 'accent' | 'warn';
    constructor(_elementRef: ElementRef, _changeDetectorRef: ChangeDetectorRef);
    getHeight(): string;
    getCircleDiameter(): number;
    getCircleStrokeWidth(): number;
    isCircular(): boolean;
    isLinear(): boolean;
    isFullScreen(): boolean;
    isOverlay(): boolean;
    animationComplete(event: AnimationEvent): void;
    inAnimationCompleted(): void;
    outAnimationCompleted(): void;
    /**
     * Starts in animation and returns an observable for completition event.
     */
    startInAnimation(): Observable<any>;
    /**
     * Starts out animation and returns an observable for completition event.
     */
    startOutAnimation(): Observable<any>;
    /**
     * Calculate the proper diameter for the circle and set it
     */
    private _setCircleDiameter();
    /**
     * Returns the host height of the loading component
     */
    private _hostHeight();
}
