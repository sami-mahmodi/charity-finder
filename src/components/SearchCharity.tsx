'use client'
import { useState,Fragment } from "react";
import Image from "next/image";
import { causes } from "@/constant";
import { Combobox,Transition } from "@headlessui/react";
import {SearchNormal} from 'iconsax-react'



interface SearchCharityProps {
    charity: string;
    setCharity: (charity: string) => void;
  }

  


export default function SearchCharity({charity,setCharity}: SearchCharityProps){
    const [query,setQuery] = useState('');


  const filteredCharities =
  query === ''
    ? causes
    : causes.filter((item) =>
        item
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.toLowerCase().replace(/\s+/g, ''))
      );

    return(
        <div>
              <Combobox value={charity} onChange={setCharity}>
        <div className="relative p-2 rounded-md w-full bg-white flex">
          <Combobox.Button>
          <SearchNormal size="32" color="teal"/>
          </Combobox.Button>

          <div className="search-bar-container">
            <Combobox.Input
              className="p-2 outline-none text-black "
              displayValue={(item: string) => item}
              onChange={(event) => setQuery(event.target.value)} // Update the search query when the input changes
              placeholder="Search a Charity..."
            />
          </div>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options
              className="absolute w-48 mt-18 h-48 bg-slate-200 truncate "
              static
            >
              {filteredCharities.length === 0 && query !== '' ? (
                <Combobox.Option
                  value={query}
                  className="search-charity__option"
                >
                  Create "{query}"
                </Combobox.Option>
              ) : (
                filteredCharities.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative search-charity__option ${
                        active ? 'bg-custom-green text-white' : 'text-gray-900'
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>

                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active
                                ? 'text-white'
                                : 'text-pribg-primary-purple'
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
        </div>
    )
}