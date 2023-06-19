const setCouponCode = () => {
    window.addEventListener('load', () => {
        const input = document.querySelector('.post-new-php.post-type-coupon input[name="post_title"]');
        const label = document.querySelector('#title-prompt-text');
        if (input) {
            label.classList.add('screen-reader-text');
            let couponCode = Date.now().toString();
            couponCode = `pki${couponCode.slice(6)}`;
            input.value = couponCode;
        }
    });
}

export default setCouponCode;
