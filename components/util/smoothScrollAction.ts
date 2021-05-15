export const smoothScrollAction = (href: string) => {
    const headerHeight = document.querySelector('header').clientHeight
    const rect = document.getElementById(href.replace('#', '')).getBoundingClientRect().top;
    const offset = window.pageYOffset;
    const target = rect + offset - headerHeight;

    window.scrollTo({
        top: target,
        behavior: 'smooth',
    });
}