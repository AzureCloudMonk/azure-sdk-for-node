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
 * Protection Profile Collection details.
 */
class PolicyCollection extends Array {
  /**
   * Create a PolicyCollection.
   * @member {string} [nextLink] The value of next link.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of PolicyCollection
   *
   * @returns {object} metadata of PolicyCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PolicyCollection',
      type: {
        name: 'Composite',
        className: 'PolicyCollection',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PolicyElementType',
                  type: {
                    name: 'Composite',
                    className: 'Policy'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PolicyCollection;
