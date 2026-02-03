import React, { useState } from 'react'

interface Helper {
  id: number
  avatar: string
  skill1: number
  skill2: number
}

interface HireHelperScreenProps {
  onClose: () => void
}

const HireHelperScreen: React.FC<HireHelperScreenProps> = ({ onClose }) => {
  const [isDark, setIsDark] = useState(true)

  const helpers: Helper[] = [
    {
      id: 1,
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDoKa8sIMnUnmORNxaQ8TEW9EgwKh9j8MleIH4e5ZRFT2HTmClZ9mGWoduHHP9UTOLfyHbjhizsTwCJNGBIGwRUQG_sPYgLnRmwJHShABoiK2TpjvGl0o23TGLIjBkrD2IjeITNmJXSDIXiw9u5OwTZma5kckhDRtG7IrkecYzsRSdjRvQ_MmcHHjMG6D3Hu4LavA5hJYdK-Rv3sSAvbOTv_BdHHZEAXxWWhjyt5jai3-g6h_7Wf3kOu7pdchZKx6HYi1YoYIyWQngb',
      skill1: 40,
      skill2: 65,
    },
    {
      id: 2,
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAERg0OdR9RwpysJ_Expts3iEDotO7jfMDdhR3AdXZOnBR6s1uzQ0qRrH0HwJvseyiqZQN_vAm-iKlX8w_mSqEhoVJZuJOAGIUgTUQ27zhPcONRw-AwjEagwmQKdzX3NGEWCz1RH7GGNgj55rgNxnlwfd09MgjBBinga39xA6ck5YYK1EYMwu9ArBNnsBOjXnlqRic2uvP-pIqM_D97-bG-0c5tc_BqRfJscKsDpQw2dUMzuO1fujT3NRDp-oRaTfVH9HG-BLICklM8',
      skill1: 80,
      skill2: 20,
    },
    {
      id: 3,
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAPbbuhXFEHQ9VC125uFOjQOa1SwALnwfZDKfPW16g0qhWRvIVo9UykUE6mJeHvejmGHJrDZ2ZDn1gU9u2xDTDujexGSKnmFdP1GJVn9A40j0FWFEtWAdjHl7nz461tKKDCk2cFhM6fSfqnF7GFUUTmfKRCoXDyQeQH2ubuGn3GldyigAQPgUxrJF2r5MU-eXwOOlj0tb1Y4B2lMjBrpJCKtNv8xnUk2BwkANvU_DQ0rCVQV67rQTa5Znsy46NXM74BWOEEs68AokoW',
      skill1: 30,
      skill2: 90,
    },
  ]

  const handleHire = (id: number) => {
    console.log(`Hired helper ${id}`)
  }

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="bg-slate-200 dark:bg-slate-900 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-white dark:bg-black rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col h-[600px]">
          {/* Header */}
          <div className="bg-gray-100 dark:bg-[#222] px-6 py-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
            <h1 className="text-gray-600 dark:text-gray-300 font-bold tracking-widest text-lg uppercase flex-grow text-center ml-8">
              Hire a New Helper
            </h1>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-black dark:bg-gray-800 text-white flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <span className="material-icons text-sm">close</span>
            </button>
          </div>

          {/* Helpers List */}
          <div className="flex-grow bg-black p-6 overflow-y-auto space-y-4">
            {helpers.map((helper) => (
              <div
                key={helper.id}
                className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-4 flex items-center gap-4 hover:bg-gray-800/60 transition-colors"
              >
                <div className="w-24 h-24 bg-gray-700 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    alt="Helper Avatar"
                    className="w-full h-full object-cover"
                    src={helper.avatar}
                  />
                </div>
                <div className="flex-grow space-y-3">
                  <div className="w-full space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="flex-grow h-3 bg-black rounded-full overflow-hidden border border-gray-600">
                        <div
                          className="h-full bg-gray-300"
                          style={{ width: `${helper.skill1}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-400 font-medium min-w-[50px]">
                        Skill 1
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-grow h-3 bg-black rounded-full overflow-hidden border border-gray-600">
                        <div
                          className="h-full bg-gray-300"
                          style={{ width: `${helper.skill2}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-400 font-medium min-w-[50px]">
                        Skill 2
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleHire(helper.id)}
                  className="bg-gray-600 hover:bg-gray-500 text-white px-5 py-1.5 rounded-md text-sm font-semibold transition-all shadow-lg"
                >
                  Hire
                </button>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="bg-gray-300 dark:bg-gray-700 p-6 flex justify-center border-t border-gray-400 dark:border-gray-600">
            <button
              onClick={onClose}
              className="bg-black text-white px-12 py-2 rounded-xl text-lg font-bold tracking-widest uppercase hover:bg-gray-900 transition-colors shadow-md"
            >
              Close
            </button>
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="fixed bottom-4 right-4 flex gap-2">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center"
          >
            <span className="material-icons text-gray-800 dark:text-yellow-400">
              brightness_4
            </span>
          </button>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4b5563;
          border-radius: 10px;
        }
      `}</style>
    </div>
  )
}

export default HireHelperScreen
