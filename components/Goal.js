import { Card, Text } from "react-native-paper"
import React from "react"
import { getSplitTime } from "../utils/utils"
import styles from "../theme/styles"
import { StyleSheet } from "react-native"
import theme from "../theme/themes"

const Goal = ({data}) => {
    const [timeLeft, setTimeLeft] = React.useState(data.deadline * 1000 - new Date().getTime())

    React.useEffect(() => {
        updateTimeLeft()
    }, [])

    const updateTimeLeft = () => {
        setTimeout(() => {
            setTimeLeft(data.deadline * 1000 - new Date().getTime())
            updateTimeLeft()
        }, 1000)
    }

    const getCountdown = () => {
        const splitTime = getSplitTime(timeLeft)
        if(splitTime.days > 0) {
            return `${splitTime.days} days, ${splitTime.hours} hours, ${splitTime.minutes} minutes, ${splitTime.seconds} seconds`
        } else if(splitTime.hours > 0) {
            return `${splitTime.hours} hours, ${splitTime.minutes} minutes, ${splitTime.seconds} seconds`
        } else if(splitTime.minutes > 0) {
            return `${splitTime.minutes} minutes, ${splitTime.seconds} seconds`
        } else {
            return `${splitTime.seconds} seconds`
        }
    }

    const style = StyleSheet.create({
        card: {
            marginTop: 16,
            marginLeft: 16,
            marginRight: 16
        }
    })

    return <Card mode="outlined" style={style.card}>
        <Card.Content>
            <Text style={{...styles.textTitle, lineHeight: 32}}>
                I want to abstain from all addictive substances for my{' '}
                <Text style={styles.textTitleBold}>{data.eventName}</Text>{' '}
                which is coming up in <Text style={{...styles.textTitleBold, color: theme.colors.accent}}>{getCountdown()}</Text> 
            </Text>
            
            
        </Card.Content>
    </Card>
}

export default Goal