import { DoCheck, QueryList, OnInit, ElementRef, TemplateRef, ViewContainerRef, ChangeDetectorRef, AfterViewInit, OnDestroy } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { MdChip, MdInputDirective, TemplatePortalDirective, MdOption, MdAutocompleteTrigger } from '@angular/material';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/debounceTime';
export declare class TdBasicChipDirective extends TemplatePortalDirective {
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef);
}
export declare class TdAutocompleteOptionDirective extends TemplatePortalDirective {
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef);
}
export declare class TdChipsComponent implements ControlValueAccessor, DoCheck, OnInit, AfterViewInit, OnDestroy {
    private _elementRef;
    private _changeDetectorRef;
    private _document;
    private _outsideClickSubs;
    /**
     * Implemented as part of ControlValueAccessor.
     */
    private _value;
    private _items;
    private _length;
    private _requireMatch;
    private _readOnly;
    private _chipAddition;
    private _focused;
    private _tabIndex;
    _internalClick: boolean;
    _inputChild: MdInputDirective;
    _autocompleteTrigger: MdAutocompleteTrigger;
    _chipsChildren: QueryList<MdChip>;
    _basicChipTemplate: TdBasicChipDirective;
    _autocompleteOptionTemplate: TdAutocompleteOptionDirective;
    _options: QueryList<MdOption>;
    /**
     * Flag that is true when autocomplete is focused.
     */
    readonly focused: boolean;
    /**
     * FormControl for the mdInput element.
     */
    inputControl: FormControl;
    /**
     * items?: any[]
     * Renders the `md-autocomplete` with the provided list to display as options.
     */
    items: any[];
    /**
     * requireMatch?: boolean
     * Blocks custom inputs and only allows selections from the autocomplete list.
     */
    requireMatch: any;
    /**
     * readOnly?: boolean
     * Disables the chips input and chip removal icon.
     */
    readOnly: boolean;
    /**
     * chipAddition?: boolean
     * Disables the ability to add chips. When setting readOnly as true, this will be overriden.
     * Defaults to true.
     */
    chipAddition: boolean;
    /**
     * Checks if not in readOnly state and if chipAddition is set to 'true'
     * States if a chip can be added and if the input is available
     */
    readonly canAddChip: boolean;
    /**
     * placeholder?: string
     * Placeholder for the autocomplete input.
     */
    placeholder: string;
    /**
     * debounce?: number
     * Debounce timeout between keypresses. Defaults to 200.
     */
    debounce: number;
    /**
     * add?: function
     * Method to be executed when a chip is added.
     * Sends chip value as event.
     */
    onAdd: EventEmitter<any>;
    /**
     * remove?: function
     * Method to be executed when a chip is removed.
     * Sends chip value as event.
     */
    onRemove: EventEmitter<any>;
    /**
     * inputChange?: function
     * Method to be executed when the value in the autocomplete input changes.
     * Sends string value as event.
     */
    onInputChange: EventEmitter<string>;
    /**
     * Implemented as part of ControlValueAccessor.
     */
    value: any;
    /**
     * Hostbinding to set the a11y of the TdChipsComponent depending on its state
     */
    readonly tabIndex: number;
    constructor(_elementRef: ElementRef, _changeDetectorRef: ChangeDetectorRef, _document: any);
    /**
     * Listens to host focus event to act on it
     */
    focusListener(event: FocusEvent): void;
    /**
     * If clicking on :host or `td-chips-wrapper`, then we stop the click propagation so the autocomplete
     * doesnt close automatically.
     */
    clickListener(event: Event): void;
    /**
     * Listens to host keydown event to act on it depending on the keypress
     */
    keydownListener(event: KeyboardEvent): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    /**
     * Method that is executed when trying to create a new chip from the autocomplete.
     * It check if [requireMatch] is enabled, and tries to add the first active option
     * else if just adds the value thats on the input
     * returns 'true' if successful, 'false' if it fails.
     */
    _handleAddChip(): boolean;
    /**
     * Method thats exectuted when trying to add a value as chip
     * returns 'true' if successful, 'false' if it fails.
     */
    addChip(value: any): boolean;
    /**
     * Method that is executed when trying to remove a chip.
     * returns 'true' if successful, 'false' if it fails.
     */
    removeChip(index: number): boolean;
    _handleFocus(): boolean;
    /**
     * Sets focus state of the component
     */
    setFocusedState(): void;
    /**
     * Removes focus state of the component
     */
    removeFocusedState(): void;
    /**
     * Programmatically focus the input or first chip. Since its the component entry point
     * depending if a user can add or remove chips
     */
    focus(): void;
    /**
     * Passes relevant input key presses.
     */
    _inputKeydown(event: KeyboardEvent): void;
    /**
     * Passes relevant chip key presses.
     */
    _chipKeydown(event: KeyboardEvent, index: number): void;
    /**
     * Method to remove from display the value added from the autocomplete since it goes directly as chip.
     */
    _removeInputDisplay(): string;
    /**
     * Method to open the autocomplete manually if its not already opened
     */
    _openAutocomplete(): void;
    /**
     * Method to close the autocomplete manually if its not already closed
     */
    _closeAutocomplete(): void;
    /**
     * Implemented as part of ControlValueAccessor.
     */
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    onChange: (_: any) => any;
    onTouched: () => any;
    /**
     * Get total of chips
     */
    private readonly _totalChips;
    /**
     * Method to focus a desired chip by index
     */
    private _focusChip(index);
    /** Method to focus first chip */
    private _focusFirstChip();
    /** Method to focus last chip */
    private _focusLastChip();
    /**
     * Method to toggle the disable state of input
     * Checks if not in readOnly state and if chipAddition is set to 'true'
     */
    private _toggleInput();
    /**
     * Sets first option as active to let the user know which one will be added when pressing enter
     * Only if [requireMatch] has been set
     */
    private _setFirstOptionActive();
    /**
     * Watches clicks outside of the component to remove the focus
     * The autocomplete panel is considered inside the component so we
     * need to use a flag to find out when its clicked.
     */
    private _watchOutsideClick();
}
