import * as menu from './menu'

const parser = async() => {
    const content = await menu.parse()  
    return {
        menu: content
    }
}

export default parser 