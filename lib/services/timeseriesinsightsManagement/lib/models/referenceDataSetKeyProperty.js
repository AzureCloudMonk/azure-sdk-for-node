/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * A key property for the reference data set. A reference data set can have
 * multiple key properties.
 *
 */
class ReferenceDataSetKeyProperty {
  /**
   * Create a ReferenceDataSetKeyProperty.
   * @member {string} [name] The name of the key property.
   * @member {string} [type] The type of the key property. Possible values
   * include: 'String', 'Double', 'Bool', 'DateTime'
   */
  constructor() {
  }

  /**
   * Defines the metadata of ReferenceDataSetKeyProperty
   *
   * @returns {object} metadata of ReferenceDataSetKeyProperty
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ReferenceDataSetKeyProperty',
      type: {
        name: 'Composite',
        className: 'ReferenceDataSetKeyProperty',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'Enum',
              allowedValues: [ 'String', 'Double', 'Bool', 'DateTime' ]
            }
          }
        }
      }
    };
  }
}

module.exports = ReferenceDataSetKeyProperty;
