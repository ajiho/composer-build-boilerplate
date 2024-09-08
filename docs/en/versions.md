# Version List

Here you can find the currently released version of the document

<script setup>
import jsonData from '../versions.json';

</script>

<table>
  <tr v-for="(value, key, index) in jsonData.archived" :key="index">
    <td>{{ key }}</td>
    <td><a :href="value" target="__blank">文档地址</a></td>
    <td> <a :href="`https://github.com/ajiho/think-weather/releases/tag/think-weather-v${key}`">release note</a></td>
  </tr>
</table>
