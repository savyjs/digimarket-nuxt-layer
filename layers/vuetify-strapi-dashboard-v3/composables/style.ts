export const useStyle = ((element: string) => {
    const map = useAppConfig?.stylePreset ?? {
        input: 'solo-filled',
        btn: 'tonal',
    }
    return map?.[element] ?? undefined
})