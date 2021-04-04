/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// adb connect 127.0.0.1:21503
// npx react-native run-android
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Appbar, TextInput, RadioButton, Checkbox, Button } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

Hobbies = []
const App = () => {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const [gender, setGender] = useState('Male');

  const [checkbox1, setCheckbox1] = useState(false)
  const [checkbox2, setCheckbox2] = useState(false)
  const [checkbox3, setCheckbox3] = useState(false)
  const [checkbox4, setCheckbox4] = useState(false)
  const [checkbox5, setCheckbox5] = useState(false)
  const [checkbox6, setCheckbox6] = useState(false)

  const [occupation, setOccupation] = useState('')

  const _HandleCheckBox = (status, value) => {
    value === "Programming" ? setCheckbox1(status) : false
    value === "Reading" ? setCheckbox2(status) : false
    value === "Sports" ? setCheckbox3(status) : false
    value === "Travelling" ? setCheckbox4(status) : false
    value === "Studying" ? setCheckbox5(status) : false
    value === "Walking" ? setCheckbox6(status) : false

    if (status === true) {
      Hobbies.push(value)
      Hobbies = [...new Set(Hobbies)];
    }
    else {
      ind = Hobbies.indexOf(value)
      if (ind != -1) {
        Hobbies.splice(ind, 1)
      }
    }
  }

  const _Submit = () => {
    console.log(name, phone, email, gender, Hobbies, occupation)
    setName('')
    setPhone('')
    setEmail('')
    setGender('Male')
    setCheckbox1(false)
    setCheckbox2(false)
    setCheckbox3(false)
    setCheckbox4(false)
    setCheckbox5(false)
    setCheckbox6(false)
    Hobbies = Hobbies.splice()
    alert("Form Submitted!")
  }

  return (
    <View style={{ flex: 1 }}>

      {/* Header || Name || Phone || Email */}
      <View style={{ flex: 0.35 }}>
        <Appbar.Header>
          <Appbar.Content title="Registration form" titleStyle={{ textAlign: "center" }} />
        </Appbar.Header>

        <TextInput
        style={{marginVertical:1}}
          label="Name"
          autoFocus={true}
          value={name}
          onChangeText={text => setName(text)}
        />

        <TextInput
          label="Phone"
          style={{marginVertical:1}}
          value={phone}
          keyboardType={'numeric'}
          onChangeText={text => setPhone(text)}
        />

        <TextInput
          label="Email"
          value={email}
          keyboardType={'email-address'}
          onChangeText={text => setEmail(text)}
        />
      </View>

      {/* Gender */}
      <View style={{ flex: 0.05, flexDirection: "row", padding: 5 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Gender</Text>

        <View style={{ flex: 0.8, flexDirection: "row", marginLeft: 10 }}>
          <RadioButton
            value={gender}
            status={gender === 'Male' ? 'checked' : 'unchecked'}
            onPress={() => setGender('Male')}
          />
          <Text onPress={() => setGender("Male")} style={{ fontSize: 20, marginTop: 3 }}>Male</Text>
        </View>


        <View style={{ flex: 1, flexDirection: "row" }}>
          <RadioButton
            value={gender}
            status={gender === 'Female' ? 'checked' : 'unchecked'}
            onPress={() => setGender('Female')}
          />
          <Text onPress={() => setGender("Female")} style={{ fontSize: 20, marginTop: 3 }}>Female</Text>
        </View>


        <View style={{ flex: 1, flexDirection: "row" }}>
          <RadioButton
            value={gender}
            status={gender === 'Others' ? 'checked' : 'unchecked'}
            onPress={() => setGender('Others')}
          />
          <Text onPress={() => setGender("Others")} style={{ fontSize: 20, marginTop: 3 }}>Others</Text>
        </View>

      </View>

      {/* Hobbies */}
      <View style={{ flex: 0.2, paddingHorizontal: 10 }}>

        <Text style={{ textAlign: "center", fontSize: 20, textDecorationLine: "underline", fontWeight: "bold" }}>Hobbies</Text>

        {/* Programming || Reading */}
        <View style={{ flex: 1, flexDirection: "row" }}>

          <View style={{ flex: 1, flexDirection: "row" }}>
            <Checkbox
              status={checkbox1 ? 'checked' : 'unchecked'}
              onPress={() => _HandleCheckBox(!checkbox1, "Programming")}
            />
            <Text onPress={() => _HandleCheckBox(!checkbox1, "Programming")} style={{ fontSize: 20, marginTop: 4 }}>Programming</Text>
          </View>

          <View style={{ flex: 1, flexDirection: "row" }}>
            <Checkbox
              status={checkbox2 ? 'checked' : 'unchecked'}
              onPress={() => _HandleCheckBox(!checkbox2, "Reading")}
            />
            <Text onPress={() => _HandleCheckBox(!checkbox2, "Reading")} style={{ fontSize: 20, marginTop: 4 }}>Reading</Text>
          </View>

        </View>

        {/* Sports || Travelling */}
        <View style={{ flex: 1, flexDirection: "row" }}>

          <View style={{ flex: 1, flexDirection: "row" }}>
            <Checkbox
              status={checkbox3 ? 'checked' : 'unchecked'}
              onPress={() => _HandleCheckBox(!checkbox3, "Sports")}
            />
            <Text onPress={() => _HandleCheckBox(!checkbox3, "Sports")} style={{ fontSize: 20, marginTop: 4 }}>Sports</Text>
          </View>

          <View style={{ flex: 1, flexDirection: "row" }}>
            <Checkbox
              status={checkbox4 ? 'checked' : 'unchecked'}
              onPress={() => _HandleCheckBox(!checkbox4, "Travelling")}
            />
            <Text onPress={() => _HandleCheckBox(!checkbox4, "Travelling")} style={{ fontSize: 20, marginTop: 4 }}>Travelling</Text>
          </View>

        </View>

        {/* Studying || Walking */}
        <View style={{ flex: 1, flexDirection: "row" }}>

          <View style={{ flex: 1, flexDirection: "row" }}>
            <Checkbox
              status={checkbox5 ? 'checked' : 'unchecked'}
              onPress={() => _HandleCheckBox(!checkbox5, "Studying")}
            />
            <Text onPress={() => _HandleCheckBox(!checkbox5, "Studying")} style={{ fontSize: 20, marginTop: 4 }}>Studying</Text>
          </View>

          <View style={{ flex: 1, flexDirection: "row" }}>
            <Checkbox
              status={checkbox6 ? 'checked' : 'unchecked'}
              onPress={() => _HandleCheckBox(!checkbox6, "Walking")}
            />
            <Text onPress={() => _HandleCheckBox(!checkbox6, "Walking")} style={{ fontSize: 20, marginTop: 4 }}>Walking</Text>
          </View>

        </View>

      </View>

      {/* Occupation || Submit Button*/}
      <View style={{ flex: 0.16, padding: 10 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold",  marginLeft: 25 }}>Occupation</Text>
        <View style={{ position: 'absolute', marginLeft: 200, marginTop: 7 }}>
          <DropDownPicker
            items={[
              { label: 'Student', value: 'Student', selected: true, icon: () => <Icon name="user" size={18} color="#900" /> },
              { label: 'Professional', value: 'Professional', icon: () => <Icon name="user-check" size={18} color="#900" /> },
            ]}
            defaultValue={occupation}
            containerStyle={{ width: 200 }}
            style={{ backgroundColor: '#fafafa' }}
            itemStyle={{
              justifyContent: "center",
            }}
            dropDownStyle={{ backgroundColor: '#fafafa', zIndex: 10 }}
            onChangeItem={item => setOccupation(item.value)}
          />
        </View>

        {/* Submit button */}
        <View style={{ zIndex: -1, marginTop: 30 }}>
          <Button style={{ marginHorizontal: "30%" }} mode="contained" onPress={() => _Submit()}>
            Submit
          </Button>
        </View>

      </View>

    </View>

  );
}
export default App;