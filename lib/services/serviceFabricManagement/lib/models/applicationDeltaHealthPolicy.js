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

const models = require('./index');

/**
 * Defines a delta health policy used to evaluate the health of an application
 * or one of its child entities when upgrading the cluster.
 *
 *
 */
class ApplicationDeltaHealthPolicy {
  /**
   * Create a ApplicationDeltaHealthPolicy.
   * @member {object} [defaultServiceTypeDeltaHealthPolicy] The delta health
   * policy used by default to evaluate the health of a service type when
   * upgrading the cluster.
   * @member {number}
   * [defaultServiceTypeDeltaHealthPolicy.maxPercentDeltaUnhealthyServices] The
   * maximum allowed percentage of services health degradation allowed during
   * cluster upgrades.
   * The delta is measured between the state of the services at the beginning
   * of upgrade and the state of the services at the time of the health
   * evaluation.
   * The check is performed after every upgrade domain upgrade completion to
   * make sure the global state of the cluster is within tolerated limits.
   * @member {object} [serviceTypeDeltaHealthPolicies] The map with service
   * type delta health policy per service type name. The map is empty by
   * default.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApplicationDeltaHealthPolicy
   *
   * @returns {object} metadata of ApplicationDeltaHealthPolicy
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationDeltaHealthPolicy',
      type: {
        name: 'Composite',
        className: 'ApplicationDeltaHealthPolicy',
        modelProperties: {
          defaultServiceTypeDeltaHealthPolicy: {
            required: false,
            serializedName: 'defaultServiceTypeDeltaHealthPolicy',
            type: {
              name: 'Composite',
              className: 'ServiceTypeDeltaHealthPolicy'
            }
          },
          serviceTypeDeltaHealthPolicies: {
            required: false,
            serializedName: 'serviceTypeDeltaHealthPolicies',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'ServiceTypeDeltaHealthPolicyElementType',
                  type: {
                    name: 'Composite',
                    className: 'ServiceTypeDeltaHealthPolicy'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationDeltaHealthPolicy;