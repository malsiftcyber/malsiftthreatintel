//
//  ContentView.swift
//  BarHistoryApp
//
//  Created by Rich Baker on 3/7/25.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Image(systemName: "smiley")
                .imageScale(.large)
                .foregroundStyle(.tint)
            Text("Hello, Caroline!")
        }
        .padding()
    }
}

#Preview {
    ContentView()
}
