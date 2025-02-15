
import React from 'react';
import { Accordion, AccordionItem, AccordionControl, AccordionPanel, Card, Text, Box, MantineProvider, Checkbox, createTheme, Autocomplete } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
import { CloseButton, Combobox, Input, InputBase, useCombobox } from '@mantine/core';

const groceries = [
  'New Arrivals',
  'New Arrivals',
  'New Arrivals',
  'New Arrivalss',
  'New Arrivals',
  'New Arrivals',
];
const InputBox = () => {
  const theme = createTheme({
    /** Your theme override here */
  });
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));
  return (

    <Box style={{}}>
      <Text style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '20px' }}>Jeans</Text>
      <Box style={{ width: '300px',height: '100px'  }}>
        {/* <Card shadow="sm" padding="lg" radius="md" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Accordion multiple>
            <AccordionItem value="menu-0">
              <AccordionControl style={{fontWeight: 'bold',fontSize: '18px'}}> Sortby :Relevance</AccordionControl>
              <AccordionPanel>
                <Text size="sm" style={{fontSize: '18px',padding:'15px 0px'}}>Carnival</Text>
                <Text size="sm" style={{fontSize: '18px',padding:'15px 0px'}}>Analytics</Text>
                <Text size="sm" style={{fontSize: '18px',padding:'15px 0px'}}>Revenue</Text>
              </AccordionPanel>
            </AccordionItem>  
          </Accordion>
        </Card> */}
        <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={
            value !== null ? (
              <CloseButton
                size="sm"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => setValue(null)}
                aria-label="Clear value"
              />
            ) : (
              <Combobox.Chevron />
            )
          }
          onClick={() => combobox.toggleDropdown()}
          rightSectionPointerEvents={value === null ? 'none' : 'all'}
        >
          {value || <Input.Placeholder style={{fontSize: '18px'}}>Sort by :Relevance</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
      </Box>
      <Box style={{ height: '100%', width: '300px', marginBottom: '20px' }}>
        <Card shadow="sm" padding="lg" radius="md" style={{ height: '100%', display: 'flex', flexDirection: 'column', border: '0.2px solid #C5C6C7' }}>
          <Accordion multiple>
            <AccordionItem value="menu-1">
              <AccordionControl style={{fontWeight: 'bold',fontSize: '18px'}}>Category</AccordionControl>
              <AccordionPanel>
                <MantineProvider theme={theme}>
                  <Checkbox label="Pointer cursor" mt="md" />
                  <Checkbox label="Pointer cursor" mt="md" />
                  <Checkbox label="Pointer cursor" mt="md" />
                </MantineProvider>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem value="menu-2">
              <AccordionControl style={{fontWeight: 'bold',fontSize: '18px'}}> Gender</AccordionControl>
              <AccordionPanel style={{}}>
                <Text size="md" style={{ border: '0.2px solid #C5C6C7' }}>Boys</Text>
                <Text size="md" style={{ border: '0.2px solid #C5C6C7' }}>Girls</Text>
                <Text size="md" style={{ border: '0.2px solid #C5C6C7' }}>Womens</Text>
                <Text size="md" style={{ border: '0.2px solid #C5C6C7' }}>Mens</Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem value="menu-3">
              <AccordionControl style={{fontWeight: 'bold',fontSize: '18px'}}>
                Color
              </AccordionControl>
              <AccordionPanel>
                <Text size="md" style={{ border: '0.2px solid #C5C6C7' }}>Boys</Text>
                <Text size="md" style={{ border: '0.2px solid #C5C6C7' }}>Girls</Text>
                <Text size="md" style={{ border: '0.2px solid #C5C6C7' }}>Womens</Text>
                <Text size="md" style={{ border: '0.2px solid #C5C6C7' }}>Mens</Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem value="menu-4">
              <AccordionControl style={{fontWeight: 'bold',fontSize: '18px'}}>Fabric</AccordionControl>
              <AccordionPanel>
                <MantineProvider theme={theme}>
                  <Autocomplete

                    placeholder="Search"
                    leftSection={<IconSearch size={16} stroke={1.5} />}
                    // data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
                    visibleFrom="xs"
                  />
                  <Checkbox label="Pointer cursor" mt="md" />
                  <Checkbox label="Pointer cursor" mt="md" />
                  <Checkbox label="Pointer cursor" mt="md" />
                </MantineProvider>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="menu-5">
              <AccordionControl style={{fontWeight: 'bold',fontSize: '18px'}}>Size</AccordionControl>
              <AccordionPanel>
                <MantineProvider theme={theme}>
                  <Autocomplete

                    placeholder="Search"
                    leftSection={<IconSearch size={16} stroke={1.5} />}
                    // data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
                    visibleFrom="xs"
                  />
                  <Checkbox label="Pointer cursor" mt="md" />
                  <Checkbox label="Pointer cursor" mt="md" />
                  <Checkbox label="Pointer cursor" mt="md" />
                </MantineProvider>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="menu-6">
              <AccordionControl style={{fontWeight: 'bold',fontSize: '18px'}}>Price</AccordionControl>
              <AccordionPanel>
              <Text size="md" style={{ border: '0.2px solid #C5C6C7' }}>Under 149</Text>
                <Text size="md" style={{ border: '0.2px solid #C5C6C7' }}>Under 149</Text>
                <Text size="md" style={{ border: '0.2px solid #C5C6C7' }}>Under 149</Text>
                <Text size="md" style={{ border: '0.2px solid #C5C6C7' }}>Under 149</Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="menu-7">
              <AccordionControl style={{fontWeight: 'bold',fontSize: '18px'}}>Rating</AccordionControl>
              <AccordionPanel>
              <MantineProvider theme={theme}>
                  <Checkbox label="2.0 and Above" mt="md" />
                  <Checkbox label="3.0 and Above" mt="md" />
                  <Checkbox label="4.0 and Above" mt="md" />
                  <Checkbox label="M-Trusted" mt="md" />
                </MantineProvider>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="menu-8">
              <AccordionControl style={{fontWeight: 'bold',fontSize: '18px'}}>Combo</AccordionControl>
              <AccordionPanel>
              <MantineProvider theme={theme}>
                  <Checkbox label="Combo" mt="md" />
                  <Checkbox label="Pack of 1" mt="md" />
                  <Checkbox label="Pack of 2" mt="md" />
                  <Checkbox label="Pack of 3" mt="md" />
                  <Checkbox label="Pack of 4" mt="md" />
                </MantineProvider>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="menu-9">
              <AccordionControl style={{fontWeight: 'bold',fontSize: '18px'}}>Discount</AccordionControl>
              <AccordionPanel>
              <Text size="md" style={{ border: '0.2px solid #C5C6C7' }}>10% and above</Text>
                <Text size="md" style={{ border: '0.2px solid #C5C6C7' }}>20% and above</Text>
                <Text size="md" style={{ border: '0.2px solid #C5C6C7' }}>30% and above</Text>
                <Text size="md" style={{ border: '0.2px solid #C5C6C7' }}>40% and above</Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="menu-10">
              <AccordionControl style={{fontWeight: 'bold',fontSize: '18px'}}>Smartcoins</AccordionControl>
              <AccordionPanel>
              <MantineProvider theme={theme}>
                  <Checkbox label="Get Coin" mt="md" />
                </MantineProvider>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="menu-11">
              <AccordionControl style={{fontWeight: 'bold',fontSize: '18px'}}>Meesho Gold</AccordionControl>
              <AccordionPanel>
              <MantineProvider theme={theme}>
                  <Checkbox label="Premium Products" mt="md" />
                </MantineProvider>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="menu-12">
              <AccordionControl style={{fontWeight: 'bold',fontSize: '18px'}}>Meesho Mall</AccordionControl>
              <AccordionPanel>
              <MantineProvider theme={theme}>
                  <Checkbox label="Mall Brands" mt="md" />
                </MantineProvider>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Card>
      </Box>
    </Box>
  )
}

export default InputBox;
