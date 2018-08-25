/*
 * @Author: zy9@github.com/zy410419243
 * @Date: 2018-06-08 09:13:33
 * @Last Modified by: zy9
 * @Last Modified time: 2018-08-25 21:45:09
 */
export const dispatchInjectToContentScript = detail => {
    // document.dispatchEvent(new CustomEvent('inject_to_content_script', { detail }))
    const customEvent = new CustomEvent('inject_to_content_script', {
        detail,
        bubbles: true,
        cancelable: false
    });
    const node = document.getElementById('init_window');

    node.dispatchEvent(customEvent);
};

export const dispatchContentScriptToInject = detail => {
    const customEvent = new CustomEvent('content_script_to_inject', {
        detail,
        bubbles: true,
        cancelable: false
    });
    const node = document.getElementById('init_window');

    node.dispatchEvent(customEvent);
};