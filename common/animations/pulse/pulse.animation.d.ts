import { AnimationTriggerMetadata } from '@angular/animations';
import { IAnimationOptions } from '../common/interfaces';
/**
 * Function TdPulseAnimation
 *
 * params:
 * * anchor: Name of the anchor that will attach to a dom element in the components template that will contain the animation.
 * * duration: Duration the animation will run in miliseconds. Defaults to 500 ms.
 *
 * Returns an [AnimationTriggerMetadata] object with states for a boolean trigger based pulse animation.
 *
 * usage: [@myAnchorName]="true|false"
 */
export declare function TdPulseAnimation(pulseOptions?: IAnimationOptions): AnimationTriggerMetadata;
