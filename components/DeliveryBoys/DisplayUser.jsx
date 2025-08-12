import React from "react";

import { X, Check } from "lucide-react";
import { imageUrl } from "../../core/url";

export default function DisplayUser({ user, approveOrReject }) {
  return (
    <div className="w-[30%] flex-shrink-0">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 h-fit">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-white">
          <h3 className="text-lg font-bold">User Verification</h3>
          <p className="text-blue-100 text-sm mt-1">Review user details</p>
        </div>

        <div className="p-4">
          {/* Personal Information */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-slate-800 border-b pb-2 border-slate-200 mb-3">
              Personal Information
            </h4>

            <div className="space-y-3">
              <div>
                <span className="text-xs font-medium text-slate-500">Name</span>
                <p className="text-slate-800 font-medium">{user?.name}</p>
              </div>

              <div>
                <span className="text-xs font-medium text-slate-500">
                  Email
                </span>
                <p className="text-slate-800 text-sm">{user?.email}</p>
              </div>

              <div>
                <span className="text-xs font-medium text-slate-500">
                  Mobile
                </span>
                <p className="text-slate-800">{user?.mobile}</p>
              </div>
            </div>
          </div>

          {/* Verification Images - Vertical Layout */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-slate-800 border-b pb-2 border-slate-200 mb-3">
              Verification Images
            </h4>

            <div className="space-y-4">
              {/* Image 1 */}
              <div>
                <h5 className="text-xs font-medium text-slate-700 mb-2">
                  Aadhar
                </h5>
                <div className="relative rounded-lg overflow-hidden shadow-md transform transition hover:scale-105 duration-300">
                  <img
                    src={imageUrl(user?.aadhar)}
                    alt="Profile"
                    className="w-full h-32 object-cover"
                  />
                  {!user && (
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition duration-300"></div>
                  )}
                </div>
              </div>

              {/* Image 2 */}
              <div>
                <h5 className="text-xs font-medium text-slate-700 mb-2">
                  License
                </h5>
                <div className="relative rounded-lg overflow-hidden shadow-md transform transition hover:scale-105 duration-300">
                  <img
                    src={imageUrl(user?.license)}
                    alt="Document"
                    className="w-full h-32 object-cover"
                  />
                  {!user && (
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition duration-300"></div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          {user && (
            <div className="space-y-2 pt-4 border-t border-slate-200">
              {user?.approved == false && (
                <button
                  onClick={() => approveOrReject(true, user._id)}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300 shadow-md flex items-center justify-center text-sm"
                >
                  <Check />
                  Approve
                </button>
              )}

              {user?.approved == true && (
                <button
                  onClick={() => approveOrReject(false, user._id)}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300 shadow-md flex items-center justify-center text-sm"
                >
                  <X />
                  Reject
                </button>
              )}
            </div>
          )}

          {/* Status badge */}
          {/* <div className="text-center mt-4">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-1"></span>
                Pending Verification
              </span>
            </div> */}
        </div>
      </div>
    </div>
  );
}
