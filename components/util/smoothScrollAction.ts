export const smoothScrollAction = (href: string) => {
    console.log(href);
    const rect = document.getElementById(href.replace('#', '')).getBoundingClientRect().top;
    const offset = window.pageYOffset;
    const target = rect + offset;
    
    window.scrollTo({
        top: target,
        behavior: 'smooth',
    });
}