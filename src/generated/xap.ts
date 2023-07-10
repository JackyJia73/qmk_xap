// This file was generated by [tauri-specta](https://github.com/oscartbeaumont/tauri-specta). Do not edit this file manually.

export const commands = {
    async xapVersion(id: string): Promise<__Result__<number, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('xap_version', { id }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async xapCapabilities(id: string): Promise<__Result__<number, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('xap_capabilities', { id }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async xapEnabledSubsystemCapabilities(id: string): Promise<__Result__<number, 'Todo'>> {
        try {
            return {
                status: 'ok',
                data: await TAURI_INVOKE('xap_enabled_subsystem_capabilities', { id }),
            }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async xapSecureStatus(id: string): Promise<__Result__<number, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('xap_secure_status', { id }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async xapSecureUnlock(id: string): Promise<__Result__<null, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('xap_secure_unlock', { id }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async xapSecureLock(id: string): Promise<__Result__<null, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('xap_secure_lock', { id }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async qmkVersion(id: string): Promise<__Result__<number, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('qmk_version', { id }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async qmkCapabilities(id: string): Promise<__Result__<number, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('qmk_capabilities', { id }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async qmkBoardIdentifiers(
        id: string,
    ): Promise<
        __Result__<
            {
                vendor_id: number
                product_id: number
                product_version: number
                qmk_unique_identifier: number
            },
            'Todo'
        >
    > {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('qmk_board_identifiers', { id }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async qmkBoardManufacturer(id: string): Promise<__Result__<UTF8String, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('qmk_board_manufacturer', { id }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async qmkProductName(id: string): Promise<__Result__<UTF8String, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('qmk_product_name', { id }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async qmkConfigBlobLength(id: string): Promise<__Result__<number, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('qmk_config_blob_length', { id }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async qmkConfigBlobChunk(
        id: string,
        arg: number,
    ): Promise<
        __Result__<
            [
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
                number,
            ],
            'Todo'
        >
    > {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('qmk_config_blob_chunk', { id, arg }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async qmkJumpToBootloader(id: string): Promise<__Result__<number, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('qmk_jump_to_bootloader', { id }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async qmkHardwareIdentifier(
        id: string,
    ): Promise<__Result__<[number, number, number, number], 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('qmk_hardware_identifier', { id }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async qmkReinitializeEeprom(id: string): Promise<__Result__<number, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('qmk_reinitialize_eeprom', { id }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async keymapCapabilities(id: string): Promise<__Result__<number, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('keymap_capabilities', { id }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async keymapGetLayerCount(id: string): Promise<__Result__<number, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('keymap_get_layer_count', { id }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async keymapGetKeycode(
        id: string,
        arg: KeymapGetKeycodeArg,
    ): Promise<__Result__<number, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('keymap_get_keycode', { id, arg }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async keymapGetEncoderKeycode(
        id: string,
        arg: KeymapGetEncoderKeycodeArg,
    ): Promise<__Result__<number, 'Todo'>> {
        try {
            return {
                status: 'ok',
                data: await TAURI_INVOKE('keymap_get_encoder_keycode', { id, arg }),
            }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async remappingCapabilities(id: string): Promise<__Result__<number, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('remapping_capabilities', { id }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async remappingGetLayerCount(id: string): Promise<__Result__<number, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('remapping_get_layer_count', { id }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async remappingSetKeycode(
        id: string,
        arg: RemappingSetKeycodeArg,
    ): Promise<__Result__<null, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('remapping_set_keycode', { id, arg }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async remappingSetEncoderKeycode(
        id: string,
        arg: RemappingSetEncoderKeycodeArg,
    ): Promise<__Result__<null, 'Todo'>> {
        try {
            return {
                status: 'ok',
                data: await TAURI_INVOKE('remapping_set_encoder_keycode', { id, arg }),
            }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async lightingCapabilities(id: string): Promise<__Result__<number, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('lighting_capabilities', { id }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async backlightCapabilities(id: string): Promise<__Result__<number, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('backlight_capabilities', { id }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async backlightGetEnabledEffects(id: string): Promise<__Result__<number, 'Todo'>> {
        try {
            return {
                status: 'ok',
                data: await TAURI_INVOKE('backlight_get_enabled_effects', { id }),
            }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async backlightGetConfig(
        id: string,
    ): Promise<__Result__<{ enable: number; mode: number; val: number }, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('backlight_get_config', { id }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async backlightSetConfig(id: string, arg: BacklightConfig): Promise<__Result__<null, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('backlight_set_config', { id, arg }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async backlightSaveConfig(id: string): Promise<__Result__<null, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('backlight_save_config', { id }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async rgblightCapabilities(id: string): Promise<__Result__<number, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('rgblight_capabilities', { id }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async rgblightGetEnabledEffects(id: string): Promise<__Result__<bigint, 'Todo'>> {
        try {
            return {
                status: 'ok',
                data: await TAURI_INVOKE('rgblight_get_enabled_effects', { id }),
            }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async rgblightGetConfig(
        id: string,
    ): Promise<
        __Result__<
            { enable: number; mode: number; hue: number; sat: number; val: number; speed: number },
            'Todo'
        >
    > {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('rgblight_get_config', { id }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async rgblightSetConfig(id: string, arg: RgbLightConfig): Promise<__Result__<null, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('rgblight_set_config', { id, arg }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async rgblightSaveConfig(id: string): Promise<__Result__<null, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('rgblight_save_config', { id }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async rgbmatrixCapabilities(id: string): Promise<__Result__<number, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('rgbmatrix_capabilities', { id }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async rgbmatrixGetEnabledEffects(id: string): Promise<__Result__<bigint, 'Todo'>> {
        try {
            return {
                status: 'ok',
                data: await TAURI_INVOKE('rgbmatrix_get_enabled_effects', { id }),
            }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async rgbmatrixGetConfig(
        id: string,
    ): Promise<
        __Result__<
            {
                enable: number
                mode: number
                hue: number
                sat: number
                val: number
                speed: number
                flags: number
            },
            'Todo'
        >
    > {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('rgbmatrix_get_config', { id }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async rgbmatrixSetConfig(id: string, arg: RgbMatrixConfig): Promise<__Result__<null, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('rgbmatrix_set_config', { id, arg }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async rgbmatrixSaveConfig(id: string): Promise<__Result__<null, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('rgbmatrix_save_config', { id }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async audioCapabilities(id: string): Promise<__Result__<number, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('audio_capabilities', { id }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async audioGetConfig(
        id: string,
    ): Promise<__Result__<{ enable: number; clicky_enable: number }, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('audio_get_config', { id }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async audioSetConfig(id: string, arg: AudioConfig): Promise<__Result__<null, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('audio_set_config', { id, arg }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async audioSaveConfig(id: string): Promise<__Result__<null, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('audio_save_config', { id }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async xapConstantsGet(): Promise<XAPConstants> {
        return await TAURI_INVOKE('xap_constants_get')
    },
    async keycodeSet(id: string, arg: KeyPositionConfig): Promise<__Result__<null, 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('keycode_set', { id, arg }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
    async keymapGet(
        id: string,
    ): Promise<__Result__<{ code: XAPKeyCode; position: KeyPosition }[][][], 'Todo'>> {
        try {
            return { status: 'ok', data: await TAURI_INVOKE('keymap_get', { id }) }
        } catch (e) {
            if (e instanceof Error) throw e
            else return { status: 'error', error: e as any }
        }
    },
}

export const events = __makeEvents__<{
    frontendEvent: FrontendEvent
}>({
    frontendEvent: 'frontend-event',
})

/** user-defined types **/

/**
 * Config for audio subsystem
 */
export type AudioConfig = { enable: number; clicky_enable: number }
/**
 * Config for lighting subsystem
 */
export type BacklightConfig = { enable: number; mode: number; val: number }
export type FrontendEvent =
    | { kind: 'NewDevice'; data: { device: XAPDevice } }
    | { kind: 'RemovedDevice'; data: { id: string } }
    | { kind: 'SecureStatusChanged'; data: { id: string; secure_status: XAPSecureStatus } }
    | { kind: 'LogReceived'; data: { id: string; log: string } }
export type KeyPosition = { layer: number; row: number; column: number }
export type KeyPositionConfig = { layer: number; row: number; col: number; keycode: number }
export type KeymapGetEncoderKeycodeArg = { layer: number; encoder: number; clockwise: number }
export type KeymapGetKeycodeArg = { layer: number; row: number; column: number }
export type KeymapInfo = {
    matrix: Matrix
    layer_count: number | null
    get_keycode_enabled: boolean
    get_encoder_keycode_enabled: boolean
}
export type LightingCapabilities = {
    effects: number[]
    get_config_enabled: boolean
    set_config_enabled: boolean
    save_config_enabled: boolean
}
export type LightingInfo = {
    backlight: LightingCapabilities | null
    rgblight: LightingCapabilities | null
    rgbmatrix: LightingCapabilities | null
}
export type Matrix = { cols: number; rows: number }
export type QMKInfo = {
    version: string
    board_ids: QmkBoardIdentifiersResponse
    manufacturer: string
    product_name: string
    config: string
    hardware_id: string
    jump_to_bootloader_enabled: boolean
    eeprom_reset_enabled: boolean
}
export type QmkBoardIdentifiersResponse = {
    vendor_id: number
    product_id: number
    product_version: number
    qmk_unique_identifier: number
}
export type RemapInfo = {
    layer_count: number | null
    set_keycode_enabled: boolean
    set_encoder_keycode_enabled: boolean
}
export type RemappingSetEncoderKeycodeArg = {
    layer: number
    encoder: number
    clockwise: number
    keycode: number
}
export type RemappingSetKeycodeArg = { layer: number; row: number; column: number; keycode: number }
/**
 * RGB config for RGB lighting subsystem
 */
export type RgbLightConfig = {
    enable: number
    mode: number
    hue: number
    sat: number
    val: number
    speed: number
}
/**
 * RGB config for RGB matrix subsystem
 */
export type RgbMatrixConfig = {
    enable: number
    mode: number
    hue: number
    sat: number
    val: number
    speed: number
    flags: number
}
export type UTF8String = string
export type XAPConstants = { keycodes: XAPKeyCodeCategory[] }
export type XAPDevice = {
    id: string
    info: XAPDeviceInfo
    keymap: XAPKeyCodeConfig[][][]
    secure_status: XAPSecureStatus
}
export type XAPDeviceInfo = {
    xap: XAPInfo
    qmk: QMKInfo
    keymap: KeymapInfo | null
    remap: RemapInfo | null
    lighting: LightingInfo | null
}
export type XAPInfo = { version: number }
export type XAPKeyCode = {
    code?: number
    key: string
    group?: string | null
    label?: string | null
    aliases?: string[]
}
export type XAPKeyCodeCategory = { name: string; codes: XAPKeyCode[] }
export type XAPKeyCodeConfig = { code: XAPKeyCode; position: KeyPosition }
export type XAPSecureStatus = 'Locked' | 'Unlocking' | 'Unlocked'

/** tauri-specta globals **/

import { invoke as TAURI_INVOKE } from '@tauri-apps/api/tauri'
import * as TAURI_API_EVENT from '@tauri-apps/api/event'
import { type WebviewWindowHandle as __WebviewWindowHandle__ } from '@tauri-apps/api/window'

type __EventObj__<T> = {
    listen: (cb: TAURI_API_EVENT.EventCallback<T>) => ReturnType<typeof TAURI_API_EVENT.listen<T>>
    once: (cb: TAURI_API_EVENT.EventCallback<T>) => ReturnType<typeof TAURI_API_EVENT.once<T>>
    emit: T extends null
        ? (payload?: T) => ReturnType<typeof TAURI_API_EVENT.emit>
        : (payload: T) => ReturnType<typeof TAURI_API_EVENT.emit>
}

export type __Result__<T, E> = { status: 'ok'; data: T } | { status: 'error'; error: E }

function __makeEvents__<T extends Record<string, any>>(mappings: Record<keyof T, string>) {
    return new Proxy(
        {} as unknown as {
            [K in keyof T]: __EventObj__<T[K]> & {
                (handle: __WebviewWindowHandle__): __EventObj__<T[K]>
            }
        },
        {
            get: (_, event) => {
                const name = mappings[event as keyof T]

                return new Proxy((() => {}) as any, {
                    apply: (_, __, [window]: [__WebviewWindowHandle__]) => ({
                        listen: (arg: any) => window.listen(name, arg),
                        once: (arg: any) => window.once(name, arg),
                        emit: (arg: any) => window.emit(name, arg),
                    }),
                    get: (_, command: keyof __EventObj__<any>) => {
                        switch (command) {
                            case 'listen':
                                return (arg: any) => TAURI_API_EVENT.listen(name, arg)
                            case 'once':
                                return (arg: any) => TAURI_API_EVENT.once(name, arg)
                            case 'emit':
                                return (arg: any) => TAURI_API_EVENT.emit(name, arg)
                        }
                    },
                })
            },
        },
    )
}
