import axios from 'axios'

interface slackArgs {
    data: string,
    url: string
}

export default async({data, url}: slackArgs) => {

    let message: any = {
        attachments: [], 
    }
    
    if (data == "404") {
        message.attachments.push({
            pretext: '식단표가 없습니다. 식단표 `등록` 해주세요 😢',
            color: "#2eb886",
            fields: [
                {
                    type:'mrkdwn',
                    title: 'wmit-cook Github Repository 📦',
                    value: "https://github.com/ktj1312/wmit-cook",
                }, 
            ],
            footer: 'Github - wmit-cook'
        })
    } else {
        message.attachments.push({
            pretext: '오늘의 메뉴입니다.',
            color: "#2eb886",
            fields: [
                {
                    type:'mrkdwn',
                    title: '오늘의 식단 🥘',
                    value: data,
                }, 
            ],
            footer: 'Github - wmit-cook'
        })
    }

    await axios.post(url, message)
}
