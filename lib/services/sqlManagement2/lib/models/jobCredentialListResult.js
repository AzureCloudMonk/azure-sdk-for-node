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
 * A list of job credentials.
 */
class JobCredentialListResult extends Array {
  /**
   * Create a JobCredentialListResult.
   * @member {string} [nextLink] Link to retrieve next page of results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of JobCredentialListResult
   *
   * @returns {object} metadata of JobCredentialListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobCredentialListResult',
      type: {
        name: 'Composite',
        className: 'JobCredentialListResult',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'JobCredentialElementType',
                  type: {
                    name: 'Composite',
                    className: 'JobCredential'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            readOnly: true,
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

module.exports = JobCredentialListResult;