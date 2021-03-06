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
 * Class representing the progress during installation of updates
 *
 */
class UpdateInstallProgress {
  /**
   * Create a UpdateInstallProgress.
   * @member {number} [percentComplete] Percentage of completion.
   * @member {number} [numberOfUpdatesToInstall] Number of updates to install.
   * @member {number} [numberOfUpdatesInstalled] Number of updates installed.
   */
  constructor() {
  }

  /**
   * Defines the metadata of UpdateInstallProgress
   *
   * @returns {object} metadata of UpdateInstallProgress
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UpdateInstallProgress',
      type: {
        name: 'Composite',
        className: 'UpdateInstallProgress',
        modelProperties: {
          percentComplete: {
            required: false,
            serializedName: 'percentComplete',
            type: {
              name: 'Number'
            }
          },
          numberOfUpdatesToInstall: {
            required: false,
            serializedName: 'numberOfUpdatesToInstall',
            type: {
              name: 'Number'
            }
          },
          numberOfUpdatesInstalled: {
            required: false,
            serializedName: 'numberOfUpdatesInstalled',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = UpdateInstallProgress;
