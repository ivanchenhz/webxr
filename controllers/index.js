exports.index = (req, rsp) => {
    rsp.render('index')
}

exports.webxr = (req, rsp) => {
    rsp.render(`webxr/${req.params.webxr}`)
}