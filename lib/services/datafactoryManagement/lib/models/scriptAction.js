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
 * Custom script action to run on HDI ondemand cluster once it's up.
 *
 */
class ScriptAction {
  /**
   * Create a ScriptAction.
   * @member {string} name The user provided name of the script action.
   * @member {string} uri The URI for the script action.
   * @member {object} roles The node types on which the script action should be
   * executed.
   * @member {string} [parameters] The parameters for the script action.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ScriptAction
   *
   * @returns {object} metadata of ScriptAction
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ScriptAction',
      type: {
        name: 'Composite',
        className: 'ScriptAction',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          uri: {
            required: true,
            serializedName: 'uri',
            type: {
              name: 'String'
            }
          },
          roles: {
            required: true,
            serializedName: 'roles',
            type: {
              name: 'Object'
            }
          },
          parameters: {
            required: false,
            serializedName: 'parameters',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ScriptAction;