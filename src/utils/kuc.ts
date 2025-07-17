import { version } from 'kintone-ui-component/lib/version';

type KucDesktopComponent =
    | 'attachment'
    | 'button'
    | 'checkbox'
    | 'combobox'
    | 'date-picker'
    | 'datetime-picker'
    | 'dialog'
    | 'dropdown'
    | 'field-group'
    | 'multi-choice'
    | 'notification'
    | 'radio-button'
    | 'read-only-table'
    | 'spinner'
    | 'table'
    | 'tabs'
    | 'text'
    | 'text-area'
    | 'time-picker'
    | 'tooltip';

type KucMobileComponent =
    | 'mobile-button'
    | 'mobile-checkbox'
    | 'mobile-date-picker'
    | 'mobile-datetime-picker'
    | 'mobile-dropdown'
    | 'mobile-multi-choice'
    | 'mobile-notification'
    | 'mobile-radio-button'
    | 'mobile-text'
    | 'mobile-text-area'
    | 'mobile-time-picker';

const versionString = version.replace(/\./g, '-');
export const calcKucTagName = (component: KucDesktopComponent | KucMobileComponent) => {
    return `kuc-${component}-${versionString}`;
};
