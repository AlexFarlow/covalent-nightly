import { Renderer2, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ICanDisable } from '../common/common.module';
export interface ILayoutTogglable {
    opened: boolean;
    sidenav: MatSidenav;
    toggle(): Promise<void>;
    open(): Promise<void>;
    close(): Promise<void>;
}
export declare class LayoutToggleBase {
}
export declare const _TdLayoutToggleMixinBase: (new (...args: any[]) => ICanDisable) & typeof LayoutToggleBase;
export declare abstract class LayoutToggle extends _TdLayoutToggleMixinBase implements AfterViewInit, OnDestroy, ICanDisable {
    protected _layout: ILayoutTogglable;
    private _renderer;
    private _elementRef;
    private _toggleSubs;
    private _initialized;
    private _hideWhenOpened;
    /**
     * hideWhenOpened?: boolean
     * When this is set to true, the host will be hidden when
     * the sidenav is opened.
     */
    hideWhenOpened: boolean;
    constructor(_layout: ILayoutTogglable, _renderer: Renderer2, _elementRef: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /**
     * Listens to host click event to trigger the layout toggle
     */
    clickListener(event: Event): void;
    abstract onClick(): void;
    private _toggleVisibility();
}
