/* eslint-disable react/prop-types */
// eslint-disable-next-line import/no-unresolved
import FormField from 'part:@sanity/components/formfields/default';
// eslint-disable-next-line import/no-unresolved
import Select from 'part:@sanity/components/selects/default';
// eslint-disable-next-line import/no-unresolved
import { withDocument } from 'part:@sanity/form-builder';
// eslint-disable-next-line import/no-unresolved
import PatchEvent, { set } from 'part:@sanity/form-builder/patch-event';
import * as React from 'react';

const DynamicSelect = React.forwardRef((props, ref) => {
  const { document, onChange, type, value } = props;
  const { title, description, level, options } = type; // details about the field

  let dynamicOptions = [];

  // are we mapping a subfield?
  dynamicOptions = options.fromSubField
    ? /*  ------------------------------------------------------------ */
      /*  1. Grab the other array field from document (fromField)
    /*  2. Map over the specified subfield string list (fromSubField)
    /*  3. build our array object
    /*    - reference a field from the main array (fromFieldData)
    /*    - store that with the subfield value (title:value)
    /*  ------------------------------------------------------------ */
      document[options.fromField].flatMap((opt) =>
        opt[options.fromSubField].map((val) => ({
          title: `${opt[options.fromFieldData.title]} - ${val}`,
          value: `${opt[options.fromFieldData.title]}:${val}`,
        }))
      )
    : // Map basic field array data
      document[options.fromField].map((opt) => ({
        title: opt[options.fromFieldData.title].toString(),
        value: opt[options.fromFieldData.value].toString(),
      }));

  // Let's make sure we include existing "list" values
  const selectOptions = [
    ...(options.list ? options.list : [{}]),
    ...dynamicOptions,
  ];

  // find our currently active value
  const currentItem = selectOptions.find((opt) => opt.value === value);

  // Save the new value on change
  const handleCustomFieldChange = (option) => {
    onChange(PatchEvent.from(set(option.value.toString())));
  };

  return (
    <FormField
      label={title}
      level={level}
      legend={title}
      description={description}
    >
      <Select
        ref={ref}
        items={selectOptions}
        onChange={(evt) => handleCustomFieldChange(evt)}
        value={currentItem}
      />
    </FormField>
  );
});

DynamicSelect.displayName = DynamicSelect;

export default withDocument(DynamicSelect);
