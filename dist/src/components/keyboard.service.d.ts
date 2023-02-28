/// <reference types="mousetrap" />
import 'mousetrap';
export declare class KeyboardService {
    private mousetrap;
    constructor();
    add(onBind: (e: ExtendedKeyboardEvent, combo: string) => any): void;
    reset(): void;
}
