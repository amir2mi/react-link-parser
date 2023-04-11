/* eslint-disable */
import React, { Fragment } from 'react';

function getLabelFromChildren(children) {
    let label = "";
    React.Children.map(children, (child) => {
        if (typeof child === "string") {
            label += child;
        }
    });
    return label;
}

function isValidUrl(string) {
    // Regex Source: https://www.freecodecamp.org/news/check-if-a-javascript-string-is-a-url/
    var urlPattern = new RegExp("^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$", "i");
    return !!urlPattern.test(string);
}

const defaultWatchers = [
    {
        watchFor: "link",
        render: (url) => (React.createElement("a", { href: url, target: "_blank", rel: "noreferrer noopener" }, url)),
    },
];
function LinkParser({ children, watchers = defaultWatchers }) {
    var _a;
    // separate words by space
    const words = (_a = getLabelFromChildren(children)) === null || _a === void 0 ? void 0 : _a.split(" ");
    return (React.createElement(React.Fragment, null, words.map((word, index) => {
        var _a;
        const { watchFor, render } = (watchers === null || watchers === void 0 ? void 0 : watchers.find(({ type = "startsWith", watchFor }) => (watchFor === "link" && isValidUrl(word)) || (watchFor !== "" && (word === null || word === void 0 ? void 0 : word[type](watchFor))))) || {};
        const content = index + 1 === (words === null || words === void 0 ? void 0 : words.length) ? ` ${word}` : `${word} `;
        return React.createElement(Fragment, { key: `${index}_${word}` }, watchFor ? (_a = render === null || render === void 0 ? void 0 : render(content)) !== null && _a !== void 0 ? _a : content : content);
    })));
}

export { LinkParser as default };
