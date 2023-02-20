export const useDarkmode = () => {
    const darkmode = useState('darkmode', () => false)
    watch(darkmode, (value : boolean) => {
        if (value) {
            document.getElementsByTagName("html")[0].setAttribute('data-mode', 'dark')
        } else {
            document.getElementsByTagName("html")[0].removeAttribute('data-mode')
        }
        localStorage.theme = value ? 'dark' : 'light'
    })
    return darkmode;
}