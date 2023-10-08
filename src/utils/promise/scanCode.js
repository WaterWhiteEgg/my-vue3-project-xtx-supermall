// 二维码promise化
export const scanCodePr = (camera = false) => {
    return new Promise((resolve, reject) => {
        uni.scanCode({
            onlyFromCamera: camera,
            scanType: ['qrCode', 'barCode'],
            // 成功返回
            success: ({ result, scanType, charSet, path }) => {
                resolve({ result, scanType, charSet, path })
            },
            // 失败返回
            fail: (error) => { reject({ massage: "未能识别该二维码！", error }) }
        })
    })
}