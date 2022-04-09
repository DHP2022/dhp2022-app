import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  appbar: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0
  },
  title: {
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 60,
    fontWeight: 'bold',
    marginTop: 30,
  },
  title2: {
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'normal',
    maxWidth: 160,  
    marginTop: 20,
    marginBottom: 50,
  },
  gata: {
    alignSelf: 'center',
    justifyContent: 'center',
    width:70,
    height:70,
    marginTop: 35,
  },
  textBox: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop:15,
    fontSize:20,
    borderWidth: 1,
    minWidth: 250,
    padding:10
  }
})

export default styles