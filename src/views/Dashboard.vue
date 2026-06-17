<template>
  <div class="p-6 font-sans max-w-7xl mx-auto">
    
    <!-- Page Header -->
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
      <h1 class="text-2xl font-bold text-gray-800">Dashboard</h1>
      
      <div class="flex items-center gap-3 mt-4 sm:mt-0">
        <el-button class="!border-gray-200 !text-gray-600 bg-white hover:bg-gray-50 !h-10 px-4">
          <el-icon class="mr-2"><Sort /></el-icon> Sort By
        </el-button>
        <div class="flex items-center border border-gray-200 rounded text-sm text-gray-600 bg-white h-10 overflow-hidden">
          <span class="px-4">01 May to 31 May</span>
          <div class="w-10 h-full bg-blue-600 flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition-colors">
            <el-icon><Calendar /></el-icon>
          </div>
        </div>
      </div>
    </div>

    <!-- 4 Main Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <!-- Total Orders -->
      <div class="bg-white p-6 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
        <p class="text-[11px] font-bold text-gray-400 tracking-wider mb-4 uppercase">Total Orders</p>
        <div class="flex items-center gap-4 mb-4">
          <div class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center">
            <el-icon :size="20"><ShoppingBag /></el-icon>
          </div>
          <h2 class="text-[28px] font-extrabold text-gray-800">687.3k</h2>
        </div>
        <div class="flex items-center text-[13px]">
          <span class="text-red-500 font-medium flex items-center">9.19% <el-icon class="ml-0.5"><CaretBottom /></el-icon></span>
          <span class="text-gray-400 ml-2">Since last month</span>
        </div>
      </div>

      <!-- Total Returns -->
      <div class="bg-white p-6 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
        <p class="text-[11px] font-bold text-gray-400 tracking-wider mb-4 uppercase">Total Returns</p>
        <div class="flex items-center gap-4 mb-4">
          <div class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center">
            <el-icon :size="20"><Tickets /></el-icon>
          </div>
          <h2 class="text-[28px] font-extrabold text-gray-800">9.62k</h2>
        </div>
        <div class="flex items-center text-[13px]">
          <span class="text-green-500 font-medium flex items-center">26.87% <el-icon class="ml-0.5"><CaretTop /></el-icon></span>
          <span class="text-gray-400 ml-2">Since last month</span>
        </div>
      </div>

      <!-- Avg Sales Earnings -->
      <div class="bg-white p-6 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
        <p class="text-[11px] font-bold text-gray-400 tracking-wider mb-4 uppercase">Avg. Sales Earnings</p>
        <div class="flex items-center gap-4 mb-4">
          <div class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center">
            <el-icon :size="20"><Money /></el-icon>
          </div>
          <div class="flex items-baseline gap-1">
            <h2 class="text-[28px] font-extrabold text-gray-800">$98.24</h2>
            <span class="text-xs font-bold text-gray-400">USD</span>
          </div>
        </div>
        <div class="flex items-center text-[13px]">
          <span class="text-green-500 font-medium flex items-center">3.51% <el-icon class="ml-0.5"><CaretTop /></el-icon></span>
          <span class="text-gray-400 ml-2">Since last month</span>
        </div>
      </div>

      <!-- Number of Visits -->
      <div class="bg-white p-6 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
        <p class="text-[11px] font-bold text-gray-400 tracking-wider mb-4 uppercase">Number of Visits</p>
        <div class="flex items-center gap-4 mb-4">
          <div class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center">
            <el-icon :size="20"><View /></el-icon>
          </div>
          <h2 class="text-[28px] font-extrabold text-gray-800">87.94M</h2>
        </div>
        <div class="flex items-center text-[13px]">
          <span class="text-red-500 font-medium flex items-center">1.05% <el-icon class="ml-0.5"><CaretBottom /></el-icon></span>
          <span class="text-gray-400 ml-2">Since last month</span>
        </div>
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="flex flex-col lg:flex-row gap-6">
      
      <!-- Left Area (Charts) -->
      <div class="flex-1 flex flex-col gap-6">
        <div class="flex flex-col md:flex-row gap-6">
          <!-- Overview Chart -->
          <div class="bg-white p-6 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex-[2] min-w-[300px]">
            <div class="flex justify-between items-center mb-8">
              <h3 class="text-lg font-bold text-gray-800">Overview</h3>
              <el-icon class="text-gray-400 cursor-pointer hover:text-gray-600"><MoreFilled /></el-icon>
            </div>
            
            <div class="flex justify-between border-b border-gray-100 pb-6 mb-6">
              <div class="flex flex-col">
                <span class="text-xs text-gray-400 mb-1">Revenue</span>
                <div class="flex items-center gap-1.5 font-bold text-gray-800 text-lg">
                  <div class="w-4 h-4 rounded border border-green-500 text-green-500 flex items-center justify-center text-[10px]"><el-icon><Top /></el-icon></div>
                  $29.5k
                </div>
              </div>
              <div class="flex flex-col">
                <span class="text-xs text-gray-400 mb-1">Expenses</span>
                <div class="flex items-center gap-1.5 font-bold text-gray-800 text-lg">
                  <div class="w-4 h-4 rounded border border-red-500 text-red-500 flex items-center justify-center text-[10px]"><el-icon><Top /></el-icon></div>
                  $15.07k
                </div>
              </div>
              <div class="flex flex-col">
                <span class="text-xs text-gray-400 mb-1">Investment</span>
                <div class="flex items-center gap-1.5 font-bold text-gray-800 text-lg">
                  <div class="w-4 h-4 rounded border border-gray-300 text-gray-500 flex items-center justify-center text-[10px]"><el-icon><Odometer /></el-icon></div>
                  $3.6k
                </div>
              </div>
              <div class="flex flex-col">
                <span class="text-xs text-gray-400 mb-1">Savings</span>
                <div class="flex items-center gap-1.5 font-bold text-gray-800 text-lg">
                  <div class="w-4 h-4 rounded border border-gray-300 text-gray-500 flex items-center justify-center text-[10px]"><el-icon><Star /></el-icon></div>
                  $6.9k
                </div>
              </div>
            </div>

            <!-- Mock Chart -->
            <div class="w-full h-[250px] relative mt-8">
              <!-- Y Axis -->
              <div class="absolute inset-y-0 left-0 flex flex-col justify-between text-[10px] text-gray-400 pb-6 w-8">
                <span>125k</span><span>100k</span><span>75k</span><span>50k</span><span>25k</span><span>0k</span>
              </div>
              
              <!-- Grid lines -->
              <div class="absolute inset-y-0 right-0 left-8 flex flex-col justify-between pb-6 z-0">
                <div class="w-full border-t border-dashed border-gray-200"></div>
                <div class="w-full border-t border-dashed border-gray-200"></div>
                <div class="w-full border-t border-dashed border-gray-200"></div>
                <div class="w-full border-t border-dashed border-gray-200"></div>
                <div class="w-full border-t border-dashed border-gray-200"></div>
                <div class="w-full border-t border-dashed border-gray-200"></div>
              </div>

              <!-- Lines/Bars -->
              <div class="absolute inset-y-0 right-0 left-8 pb-6 z-10 flex items-end justify-between px-2">
                <!-- Bar mockups -->
                <div class="w-2 bg-green-200 h-[60%] rounded-t opacity-70"></div>
                <div class="w-2 bg-green-200 h-[80%] rounded-t opacity-70"></div>
                <div class="w-2 bg-green-200 h-[40%] rounded-t opacity-70"></div>
                <div class="w-2 bg-blue-500 h-[70%] rounded-t opacity-90 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                <div class="w-2 bg-green-200 h-[50%] rounded-t opacity-70"></div>
                <div class="w-2 bg-green-200 h-[90%] rounded-t opacity-70"></div>
                <div class="w-2 bg-green-200 h-[65%] rounded-t opacity-70"></div>
                <div class="w-2 bg-blue-500 h-[55%] rounded-t opacity-90"></div>
                <div class="w-2 bg-green-200 h-[75%] rounded-t opacity-70"></div>
                <div class="w-2 bg-green-200 h-[45%] rounded-t opacity-70"></div>
                <div class="w-2 bg-blue-500 h-[35%] rounded-t opacity-90"></div>
                <div class="w-2 bg-green-200 h-[60%] rounded-t opacity-70"></div>
              </div>

              <!-- Line mockup -->
              <svg class="absolute inset-y-0 right-0 left-8 w-[calc(100%-2rem)] h-[calc(100%-1.5rem)] z-20 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0,80 Q10,70 20,85 T40,60 T60,80 T80,65 T100,75" fill="none" stroke="#8b5cf6" stroke-width="2" />
                <path d="M0,90 Q15,95 25,85 T45,95 T65,85 T85,90 T100,80" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,4" />
              </svg>

              <!-- Custom tooltip mockup for "Oct" -->
              <div class="absolute right-[20%] top-[20%] z-30 bg-white rounded-lg shadow-xl border border-gray-100 p-4 text-xs min-w-[160px]">
                <p class="text-gray-400 font-bold mb-3 border-b border-gray-100 pb-2">Oct</p>
                <div class="flex justify-between items-center mb-2">
                  <span class="flex items-center gap-2"><div class="w-2 h-2 rounded-full bg-green-500"></div> Total Income</span>
                  <span class="font-bold text-gray-700">$42.36k</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                  <span class="flex items-center gap-2"><div class="w-2 h-2 rounded-full bg-blue-500"></div> Total Expenses</span>
                  <span class="font-bold text-gray-700">$35.36k</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                  <span class="flex items-center gap-2"><div class="w-2 h-2 rounded-full bg-purple-500"></div> Investments</span>
                  <span class="font-bold text-gray-700">$52.00k</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="flex items-center gap-2"><div class="w-2 h-2 rounded-full bg-red-400"></div> Savings</span>
                  <span class="font-bold text-gray-700">$29.00k</span>
                </div>
              </div>

              <!-- X Axis -->
              <div class="absolute bottom-0 right-0 left-8 flex justify-between px-2 text-[10px] text-gray-400">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span class="text-gray-800 font-bold bg-gray-100 px-2 py-0.5 rounded">Oct</span><span>Nov</span><span>Dec</span>
              </div>
            </div>

            <!-- Legend -->
            <div class="flex justify-center gap-6 mt-6 text-xs text-gray-500">
              <span class="flex items-center gap-2"><div class="w-2.5 h-2.5 rounded-full bg-green-500"></div> Total Income</span>
              <span class="flex items-center gap-2"><div class="w-2.5 h-2.5 rounded-full bg-blue-600"></div> Total Expenses</span>
              <span class="flex items-center gap-2"><div class="w-2.5 h-2.5 rounded-full bg-purple-500"></div> Investments</span>
              <span class="flex items-center gap-2"><div class="w-2.5 h-2.5 rounded-full bg-red-400"></div> Savings</span>
            </div>
          </div>

          <!-- Top Traffic by Source -->
          <div class="bg-white p-6 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex-1 min-w-[250px] flex flex-col">
            <div class="flex justify-between items-center mb-8">
              <h3 class="text-lg font-bold text-gray-800">Top Traffic by Source</h3>
              <el-icon class="text-gray-400 cursor-pointer hover:text-gray-600"><MoreFilled /></el-icon>
            </div>
            
            <div class="flex-1 flex flex-col items-center justify-center relative my-6">
              <!-- Radial Chart Mockup -->
              <div class="w-48 h-48 relative flex items-center justify-center">
                <svg viewBox="0 0 100 100" class="w-full h-full transform -rotate-90">
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f1f5f9" stroke-width="6" />
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3b82f6" stroke-width="6" stroke-dasharray="251.2" stroke-dashoffset="60" stroke-linecap="round" />
                  
                  <circle cx="50" cy="50" r="30" fill="transparent" stroke="#f1f5f9" stroke-width="6" />
                  <circle cx="50" cy="50" r="30" fill="transparent" stroke="#10b981" stroke-width="6" stroke-dasharray="188.4" stroke-dashoffset="80" stroke-linecap="round" />
                  
                  <circle cx="50" cy="50" r="20" fill="transparent" stroke="#f1f5f9" stroke-width="6" />
                  <circle cx="50" cy="50" r="20" fill="transparent" stroke="#8b5cf6" stroke-width="6" stroke-dasharray="125.6" stroke-dashoffset="40" stroke-linecap="round" />
                </svg>
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-2 h-2 rounded-full bg-blue-500"></div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-y-4 gap-x-2 text-sm">
              <div class="flex justify-between items-center">
                <span class="flex items-center gap-2 text-gray-600"><div class="w-2 h-2 rounded-full bg-blue-500"></div> Direct</span>
                <span class="font-bold text-gray-700">965</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="flex items-center gap-2 text-gray-600"><div class="w-2 h-2 rounded-full bg-purple-500"></div> Marketing</span>
                <span class="font-bold text-gray-700 text-right">102</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="flex items-center gap-2 text-gray-600"><div class="w-2 h-2 rounded-full bg-green-500"></div> Social</span>
                <span class="font-bold text-gray-700">75</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="flex items-center gap-2 text-gray-600"><div class="w-2 h-2 rounded-full bg-red-500"></div> Affiliates</span>
                <span class="font-bold text-gray-700 text-right">96</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Area (Sidebar widgets) -->
      <div class="w-full lg:w-[320px] flex flex-col gap-6">
        
        <!-- Help line banner -->
        <div class="bg-blue-50/50 border border-blue-100 rounded-xl p-4 flex items-center gap-3">
          <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
            <el-icon><Service /></el-icon>
          </div>
          <p class="text-sm text-blue-600 font-medium">Help line: +(012) 123 456 78</p>
        </div>

        <!-- Estimated Tax Banner -->
        <div class="bg-blue-600 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
          <!-- Background decoration -->
          <div class="absolute -right-6 -top-6 text-white opacity-10">
            <el-icon :size="120"><Document /></el-icon>
          </div>
          
          <div class="w-10 h-10 rounded bg-white/20 flex items-center justify-center mb-4 backdrop-blur-sm">
            <el-icon :size="20"><Discount /></el-icon>
          </div>
          <h3 class="text-xl font-bold mb-2">Estimated tax for this year</h3>
          <p class="text-blue-100 text-sm mb-6 leading-relaxed opacity-90">We kindly encourage you to review your recent transactions</p>
          <button class="bg-blue-400 hover:bg-blue-300 text-white font-medium py-2 px-5 rounded-lg text-sm transition-colors shadow-sm">
            Activate Now
          </button>
        </div>

        <!-- Recent Orders -->
        <div class="bg-white p-6 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex-1">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-lg font-bold text-gray-800">Recent Orders:</h3>
            <button class="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700">
              <el-icon><Plus /></el-icon>
            </button>
          </div>

          <div class="space-y-5">
            <!-- Item 1 -->
            <div class="flex gap-3 items-center">
              <div class="w-10 h-10 rounded bg-gray-50 flex items-center justify-center">👟</div>
              <div class="flex-1">
                <h4 class="text-sm font-bold text-gray-800">Marco Shoes</h4>
                <p class="text-[11px] text-gray-400">$29.99 × 1 = $29.99</p>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-green-50 text-green-500">Sold</span>
            </div>
            
            <!-- Item 2 -->
            <div class="flex gap-3 items-center">
              <div class="w-10 h-10 rounded bg-gray-50 flex items-center justify-center">👕</div>
              <div class="flex-1">
                <h4 class="text-sm font-bold text-gray-800">High Waist Tshirt</h4>
                <p class="text-[11px] text-gray-400">$9.99 × 3 = $29.97</p>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-green-50 text-green-500">Sold</span>
            </div>

            <!-- Item 3 -->
            <div class="flex gap-3 items-center">
              <div class="w-10 h-10 rounded bg-gray-50 flex items-center justify-center">🪑</div>
              <div class="flex-1">
                <h4 class="text-sm font-bold text-gray-800">Comfort Chair</h4>
                <p class="text-[11px] text-gray-400">$49.99 × 1 = $49.99</p>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-red-50 text-red-500">Return</span>
            </div>

            <!-- Item 4 -->
            <div class="flex gap-3 items-center">
              <div class="w-10 h-10 rounded bg-gray-50 flex items-center justify-center">🎧</div>
              <div class="flex-1">
                <h4 class="text-sm font-bold text-gray-800">Smart Headphone</h4>
                <p class="text-[11px] text-gray-400">$39.99 × 1 = $39.99</p>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-green-50 text-green-500">Sold</span>
            </div>

            <!-- Item 5 -->
            <div class="flex gap-3 items-center">
              <div class="w-10 h-10 rounded bg-gray-50 flex items-center justify-center">🎒</div>
              <div class="flex-1">
                <h4 class="text-sm font-bold text-gray-800">Laptop Bag</h4>
                <p class="text-[11px] text-gray-400">$12.99 × 4 = $51.96</p>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-green-50 text-green-500">Sold</span>
            </div>
          </div>
          
          <div class="mt-6 text-center">
            <a href="#" class="text-sm font-bold text-gray-800 border-b border-gray-800 pb-0.5 hover:text-blue-600 hover:border-blue-600 transition-colors">View All</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { 
  Sort, Calendar, ShoppingBag, Tickets, Money, View, CaretBottom, CaretTop,
  MoreFilled, Top, Odometer, Star, Service, Document, Discount, Plus
} from '@element-plus/icons-vue'
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
