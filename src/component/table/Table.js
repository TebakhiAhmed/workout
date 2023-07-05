import React from "react";
import { useState } from "react";

const Table = (props) => {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg m-8">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Number
            </th>

            <th scope="col" class="px-6 py-3">
              Product name
            </th>
            <th scope="col" class="px-6 py-3">
              Product name
            </th>
            <th scope="col" class="px-6 py-3">
              RÄKNA
            </th>
            <th scope="col" class="px-6 py-3">
              Att Göra/ Beställa
            </th>
            <th scope="col" class="px-6 py-3">
              Önskad
            </th>
            <th scope="col" class="px-6 py-3">
              Enhet
            </th>
            <th scope="col" class="px-6 py-3">
              leverantör
            </th>
          </tr>
        </thead>
        <tbody>
          {props.propValue.map((item, index) => {
            return (
              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  key={index}
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {index + 1}
                </th>
                <td key={index} class="px-6 py-4 " contenteditable="true">
                  {item.swedish}
                </td>
                <td key={index} class="px-6 py-4">
                  {item.arabic}
                </td>
                <td key={index} class="px-6 py-4">
                  {item.RÄKNA}
                </td>
                <td key={index} class="px-6 py-4">
                  {item.ToMake}
                </td>

                <td key={index} class="px-6 py-4">
                  {item.ÖNSKAD}
                </td>

                <td key={index} class="px-6 py-4">
                  {item.ENHET}
                </td>
                <td key={index} class="px-6 py-4 ">
                  {item.LEVERANTÖR}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
