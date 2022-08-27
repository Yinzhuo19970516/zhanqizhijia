export function toast (title, fn) {
    setTimeout(() => {
        uni.showToast({
            title,
            duration: 1800,
            icon: 'none',
            success: fn
        })
    }, 10)
}

