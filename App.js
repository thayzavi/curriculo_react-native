import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image, Text, View, TouchableOpacity, Linking, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
     <View style={styles.img}>
      <Image
        source={require('./assets/icon2.png')}
        style={styles.avatar}/>
     </View>
     <Text style={styles.name}>Thayza Vitória Da Cruz Silva</Text>
     <Text style={styles.info}>21 Anos</Text>

     <Text style={styles.sectionTitle}>Formação</Text>
     <Text style={styles.info}>Designer Gráfico</Text>

     <Text style={styles.info}>Graduando em análise e desenvolvimento de sistema</Text>

     <Text style={styles.sectionTitle}>Experiências</Text>
     <Text style={styles.info}>Residência tecnológica no Porto Digital</Text>

     <Text style={styles.info}>Residência tecnológica QA Cesar</Text>

     <Text style={styles.info}>Residência tecnológica SAP Delloite</Text>

     <Text style={styles.sectionTitle}>Projetos</Text>


     <TouchableOpacity 
     style={styles.button}
     onPress={() => Linking.openURL('https://animeswebb.netlify.app/')}>
      <Text style={styles.buttonText}>Projeto de Plataforma de anime</Text>
     </TouchableOpacity>

     <TouchableOpacity 
     style={styles.button}
     onPress={() => Linking.openURL('https://thayzavi.github.io/Salao-Senac/')}>
      <Text style={styles.buttonText}>Projeto Salão senac</Text>
     </TouchableOpacity>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff', 
    justifyContent: 'center',
  },
  img: {
    marginTop: 40,
    marginBottom: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  info:{
    fontSize: 16,
    marginBottom: 3,
    textAlign: 'center',
  },
  sectionTitle:{
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 4,
    textAlign: 'center',
    color:'#333'
  },
 button:{
  backgroundColor: '#1e90ff',
  paddingVertical:12,
  paddingHorizontal:24,
  borderRadius:8,
  marginTop:10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
