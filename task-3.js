function getElementWidth(content, padding, border) {
    const contentWidth = parseInt(content);
    const paddingWidth = 2 * parseFloat(padding);
    const borderWidth = 2 * parseInt(border);

    return contentWidth + paddingWidth + borderWidth;
}