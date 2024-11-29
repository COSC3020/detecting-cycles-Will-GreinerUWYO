function hasCycle(graph) {
    // keeps an array with a value for each node, set to false, changed when the node is checked.
    let visited = [];
    visited = visitedReset(visited);

    // looks for a cycle for every starting node, since each has a different path
    for(let startNode = 0; startNode < graph.length; startNode++){
        // resets visited
        visited = visitedReset(visited);
        // sets the first node to search for true.
        visited[startNode] = true;
        // if a cycle is found, return true
        if(searchforCycle(startNode, visited)){
            return true;
        }
    }
    // if no cycle is found for any graph, return false
    return false;
}

// looks for cycles given the visited array and a node
function searchforCycle(node,visited){
    // checks each node connected to the current node
    for(let adjNode of graph[node]) {
        // if the node has been already visited, there is a cycle 
        if(visited[adjNode] === true){
            return true;
        }
        else{
            // marks each node as visited, this is true for this recursive call all the way down
            visited[adjNode] = true;
            // searches for cycles related to the current node by checking their connected nodes against the current iteration of visited
            searchforCycle(adjNode,visited);
        }
    }
    return false;
}

// resets my visited array to all falses.
function visitedReset(visited) {
    for(let i = 0; i < graph.length; node++){
        visited[i] = false;
    }
}
