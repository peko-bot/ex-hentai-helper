/*
 * @Author: zy9@github.com/zy410419243
 * @Date: 2018-06-08 09:13:33
 * @Last Modified by: zy9
 * @Last Modified time: 2018-08-25 22:37:05
 */
const dispatchInjectToContentScript = detail => {
    // document.dispatchEvent(new CustomEvent('inject_to_content_script', { detail }))
    const customEvent = new CustomEvent('inject_to_content_script', {
        detail,
    });
    const node = document.getElementById('init_window');

    node.dispatchEvent(customEvent);
};

const dispatchContentScriptToInject = detail => {
    const customEvent = new CustomEvent('content_script_to_inject', {
        detail,
    });
    const node = document.getElementById('init_window');

    node.dispatchEvent(customEvent);
};

export { dispatchInjectToContentScript, dispatchContentScriptToInject }